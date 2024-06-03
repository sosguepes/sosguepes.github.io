import React from "react";
import {
  AreaOfInterventionText,
  AskForQuoteButton,
  Container,
  MapSectionTitle,
} from "./SectionText.style";

export const SectionText = () => {
  return (
    <Container>
      <MapSectionTitle>
        Zones d’intervention - Chablais et alentours
      </MapSectionTitle>
      <AreaOfInterventionText>
        Si vous souhaitez une intervention hors de la zone initiale, une
        surcharge tarifaire sera appliquée.
      </AreaOfInterventionText>
      <AskForQuoteButton sectionId="banner" text="Demander un devis" />
    </Container>
  );
};
