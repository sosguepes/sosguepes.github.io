package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"

	_ "github.com/lib/pq"
	"github.com/mailgun/mailgun-go/v4"
)

// Quote represents a quote request from the frontend.
type Quote struct {
	ID          int64           `json:"id"`
	FormData    json.RawMessage `json:"formData"`
	Amount      int             `json:"amount"`
	PhoneNumber string          `json:"phoneNumber"`
	Name        string          `json:"name"`
	CreatedAt   time.Time       `json:"createdAt"`
	IsEmailSent bool            `json:"isEmailSent"`
	EmailSentAt *time.Time      `json:"emailSentAt"`
}

// QuoteRequest is the payload sent by the frontend.
type QuoteRequest struct {
	FormData    json.RawMessage `json:"formData"`
	Amount      int             `json:"amount"`
	PhoneNumber string          `json:"phoneNumber"`
	Name        string          `json:"name"`
}

// dailyCounter tracks quote submissions per calendar day.
type dailyCounter struct {
	mu    sync.Mutex
	date  string // "YYYY-MM-DD"
	count int
}

const maxQuotesPerDay = 50

var (
	db      *sql.DB
	counter dailyCounter
)

func main() {
	db = connectDB()
	defer db.Close()

	runMigration(db)

	go startEmailWorker()

	mux := http.NewServeMux()
	mux.HandleFunc("/api/quotes", handleQuote)

	addr := ":5000"
	log.Printf("Server listening on %s", addr)
	if err := http.ListenAndServe(addr, mux); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}

// connectDB opens a Postgres connection using environment variables.
func connectDB() *sql.DB {
	dsn := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=%s",
		getEnv("DB_HOST", "localhost"),
		getEnv("DB_PORT", "5432"),
		getEnv("DB_USER", "postgres"),
		getEnv("DB_PASSWORD", ""),
		getEnv("DB_NAME", "sosguepes"),
		getEnv("DB_SSLMODE", "disable"),
	)

	database, err := sql.Open("postgres", dsn)
	if err != nil {
		log.Fatalf("Failed to open database: %v", err)
	}

	for i := 0; i < 10; i++ {
		if err = database.Ping(); err == nil {
			log.Println("Connected to database")
			return database
		}
		log.Printf("Database not ready, retrying in 3s (%v)", err)
		time.Sleep(3 * time.Second)
	}
	log.Fatalf("Could not connect to database: %v", err)
	return nil
}

// runMigration creates the quotes table if it does not exist.
func runMigration(db *sql.DB) {
	query := `
	CREATE TABLE IF NOT EXISTS quotes (
		id            BIGSERIAL PRIMARY KEY,
		form_data     JSONB         NOT NULL,
		amount        INTEGER       NOT NULL,
		phone_number  TEXT          NOT NULL,
		name          TEXT          NOT NULL,
		created_at    TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
		is_email_sent BOOLEAN       NOT NULL DEFAULT FALSE,
		email_sent_at TIMESTAMPTZ
	);`

	if _, err := db.Exec(query); err != nil {
		log.Fatalf("Migration failed: %v", err)
	}
	log.Println("Migration applied successfully")
}

// handleQuote handles POST /api/quotes.
func handleQuote(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	if !checkRateLimit() {
		http.Error(w, "Too many requests. Daily quote limit reached.", http.StatusTooManyRequests)
		return
	}

	var req QuoteRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	if req.Amount <= 0 || req.PhoneNumber == "" || req.Name == "" {
		http.Error(w, "Missing required fields: amount, phoneNumber, name", http.StatusBadRequest)
		return
	}

	if len(req.FormData) == 0 {
		req.FormData = json.RawMessage(`{}`)
	}

	var id int64
	var createdAt time.Time
	err := db.QueryRow(
		`INSERT INTO quotes (form_data, amount, phone_number, name)
		 VALUES ($1, $2, $3, $4)
		 RETURNING id, created_at`,
		req.FormData, req.Amount, req.PhoneNumber, req.Name,
	).Scan(&id, &createdAt)
	if err != nil {
		log.Printf("Failed to insert quote: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]interface{}{
		"id":        id,
		"createdAt": createdAt,
	})
}

// checkRateLimit returns true if the request is within daily limits.
func checkRateLimit() bool {
	today := time.Now().Format("2006-01-02")
	counter.mu.Lock()
	defer counter.mu.Unlock()

	if counter.date != today {
		counter.date = today
		counter.count = 0
	}

	if counter.count >= maxQuotesPerDay {
		return false
	}
	counter.count++
	return true
}

// startEmailWorker runs a background job every 5 minutes to send pending emails.
func startEmailWorker() {
	log.Println("Email worker started")
	ticker := time.NewTicker(5 * time.Minute)
	defer ticker.Stop()

	// Run once immediately on startup, then on each tick.
	processPendingEmails()
	for range ticker.C {
		processPendingEmails()
	}
}

// processPendingEmails fetches unsent quotes and sends an email for each.
func processPendingEmails() {
	rows, err := db.Query(
		`SELECT id, form_data, amount, phone_number, name, created_at
		 FROM quotes
		 WHERE is_email_sent = FALSE`,
	)
	if err != nil {
		log.Printf("Email worker: query failed: %v", err)
		return
	}
	defer rows.Close()

	var quotes []Quote
	for rows.Next() {
		var q Quote
		if err := rows.Scan(&q.ID, &q.FormData, &q.Amount, &q.PhoneNumber, &q.Name, &q.CreatedAt); err != nil {
			log.Printf("Email worker: scan failed: %v", err)
			continue
		}
		quotes = append(quotes, q)
	}

	if len(quotes) == 0 {
		return
	}
	log.Printf("Email worker: sending %d pending email(s)", len(quotes))

	for _, q := range quotes {
		if err := sendQuoteEmail(q); err != nil {
			log.Printf("Email worker: failed to send email for quote %d: %v", q.ID, err)
			continue
		}

		now := time.Now()
		_, err := db.Exec(
			`UPDATE quotes SET is_email_sent = TRUE, email_sent_at = $1 WHERE id = $2`,
			now, q.ID,
		)
		if err != nil {
			log.Printf("Email worker: failed to update quote %d: %v", q.ID, err)
		}
	}
}

// loadRecipients reads the recipients file and returns a list of email
// addresses. Blank lines and lines starting with '#' are ignored.
func loadRecipients() ([]string, error) {
	path := getEnv("RECIPIENTS_FILE", "recipients.txt")
	data, err := os.ReadFile(path)
	if err != nil {
		return nil, fmt.Errorf("reading recipients file %q: %w", path, err)
	}

	var recipients []string
	for _, line := range strings.Split(string(data), "\n") {
		line = strings.TrimSpace(line)
		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}
		recipients = append(recipients, line)
	}

	if len(recipients) == 0 {
		return nil, fmt.Errorf("recipients file %q contains no valid addresses", path)
	}
	return recipients, nil
}

// sendQuoteEmail sends a notification email for a quote to every recipient
// listed in the recipients file, using a single Mailgun API call.
func sendQuoteEmail(q Quote) error {
	domain := getEnv("MAILGUN_DOMAIN", "")
	apiKey := getEnv("MAILGUN_API_KEY", "")
	from := getEnv("MAIL_FROM", "")

	if domain == "" || apiKey == "" || from == "" {
		return fmt.Errorf("missing Mailgun config: MAILGUN_DOMAIN, MAILGUN_API_KEY and MAIL_FROM are required")
	}

	recipients, err := loadRecipients()
	if err != nil {
		return err
	}

	htmlBody := fmt.Sprintf(
		"<h2>New Quote Request</h2>"+
			"<p><strong>Customer:</strong> %s</p>"+
			"<p><strong>Phone:</strong> %s</p>"+
			"<p><strong>Amount:</strong> %d</p>"+
			"<p><strong>Submitted at:</strong> %s</p>"+
			"<p><strong>Form data:</strong><br><pre>%s</pre></p>",
		q.Name, q.PhoneNumber, q.Amount,
		q.CreatedAt.Format(time.RFC1123),
		string(q.FormData),
	)

	mg := mailgun.NewMailgun(domain, apiKey)
	if getEnv("MAILGUN_REGION", "us") == "eu" {
		mg.SetAPIBase(mailgun.APIBaseEU)
	}

	// First recipient goes in the To: field; the rest are added via AddRecipient.
	message := mg.NewMessage(
		from,
		fmt.Sprintf("New quote from %s", q.Name),
		"",
		recipients[0],
	)
	for _, r := range recipients[1:] {
		message.AddRecipient(r)
	}
	message.SetHtml(htmlBody)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	_, _, err = mg.Send(ctx, message)
	return err
}

func getEnv(key, fallback string) string {
	if v, ok := os.LookupEnv(key); ok {
		return v
	}
	return fallback
}
