import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import { QuoteGenerator } from 'components/QuoteGenerator';
import QuoteGeneratorBanner from 'components/QuoteGeneratorBanner';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

const QuoteGenerationPage: React.FC = () => {
    return (
    <HelmetProvider>
      <NavBar />
      <main>
        <QuoteGeneratorBanner />
        <QuoteGenerator />
      </main>
      <Footer />
    </HelmetProvider>
    );
};

export default QuoteGenerationPage;