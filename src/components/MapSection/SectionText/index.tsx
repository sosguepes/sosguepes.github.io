import { SecondaryTitle } from "components/ui/SecondayTitle";
import React from "react";
import { Container } from "./SectionText.style";

export const SectionText = () => {
  return (
    <Container>
      <SecondaryTitle>
        Zones d’intervention - Chablais et alentours
      </SecondaryTitle>
      <p>
        Si vous souhaitez une intervention hors de la zone initiale, une
        surcharge tarifaire sera appliquée.
      </p>
    </Container>
  );
};
