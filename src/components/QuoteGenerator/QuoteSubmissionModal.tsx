import React, { useState } from "react";
import { ModalContainer } from "./QuoteSubmissionModal.style";
import Button from "components/ui/Button";

interface PropsType {
  closeModal: () => void;
  estimatedPriceRange: string;
  quoteData: {
    [criteria: string]: {
      label: string;
    };
  };
}

export const QuoteSubmissionModal = ({
  closeModal,
  quoteData,
  estimatedPriceRange,
}: PropsType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string | undefined>(undefined);
  const [customerName, setCustomerName] = useState<string | undefined>(
    undefined,
  );
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();

  const onClickSubmit = async () => {
    setIsLoading(true);
    const response = await fetch("https://api.sosguepes74.fr", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData: quoteData,
        priceRange: estimatedPriceRange,
        phoneNumber: phoneNumber,
        name: customerName,
      }),
    });
    if (response.status == 201) {
      setResponse(
        "Merci pour ces informations! Nous vous contacterons dès que possible.",
      );
    } else {
      setResponse("Une erreur s'est produite. Veillez réessayer plus tard.");
    }
    setIsLoading(false);
  };

  return (
    <ModalContainer>
      <form>
        <label>
          Nom et prénom
          <input
            type="text"
            name="name"
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
          />
        </label>
        <label>
          Numéro de téléphone
          <input
            type="tel"
            name="phoneNumber"
            value="phoneNumber"
            onChange={(event) =>
              setPhoneNumber(event.target.value.replace(/[^0-9+*\s]/g, ""))
            }
          />
        </label>
        <button
          disabled={!phoneNumber || !customerName || !isLoading || !response}
          onClick={onClickSubmit}
        >
          Envoyer
        </button>
        {response && <div>{response}</div>}
        <button onClick={closeModal}>Fermer</button>
      </form>
    </ModalContainer>
  );
};
