import React from "react";
import {
  AreaOfInterventionText,
  AskForQuoteButton,
  Container,
  TownList,
  MapSectionTitle,
} from "./SectionText.style";

export const SectionText = () => {
  return (
    <Container>
      <MapSectionTitle>
        Zones d’intervention - Chablais et alentours
      </MapSectionTitle>
      <AreaOfInterventionText>
        *Pour toute demande hors Chablais, n'hésitez pas à prendre directement
        contact avec Ghislain.
      </AreaOfInterventionText>
      <TownList>
        Thonon-les-Bains, Évian-les-Bains, Publier, Neuvecelle, Lugrin,
        Maxilly-sur-Léman, Bernex, Saint-Paul-en-Chablais, Vinzier, Larringes,
        Féternes, La Forclaz, Vacheresse, Abondance, La Chapelle-d’Abondance,
        Châtel, Morzine, Avoriaz, Les Gets, Montriond, Le Biot, La Vernaz,
        Saint-Jean-d’Aulps, Habère-Poche, Habère-Lullin, Boëge, Saxel,
        Bons-en-Chablais, Ballaison, Brenthonne, Sciez, Margencel,
        Anthy-sur-Léman, Allinges, Armoy, Perrignier, Draillant, Cervens,
        Orcier, Douvaine, Veigy-Foncenex, Loisin, Chens-sur-Léman, Massongy,
        Nernier, Yvoire, Saint-Cergues…
      </TownList>
      <AskForQuoteButton sectionId="banner" text="Demander un devis" />
    </Container>
  );
};
