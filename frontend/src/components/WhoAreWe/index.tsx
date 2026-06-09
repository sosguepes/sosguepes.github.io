import React from "react";
import {
  ColumnContainer,
  Fade,
  ImageContainer,
  NameText,
  Section,
  SubNameText,
  TextContainer,
  TextCorpus,
} from "./WhoAreWe.style";
import { SecondaryTitle } from "components/ui/SecondayTitle";
import { StaticImage } from "gatsby-plugin-image";
import ViewMoreButton from "components/ViewMoreButton";

const WhoAreWe = () => {
  return (
    <Section id="qui-suis-je">
      <SecondaryTitle>Plus de 15 ans d'expertise</SecondaryTitle>
      <ColumnContainer>
        <TextContainer>
          <NameText>
            <b>Ghislain Pinier</b>
          </NameText>
          <SubNameText>Expert Local en Désinsectisation</SubNameText>
          <TextCorpus>
            Plus de 15 ans d’expérience dans le Chablais. Intervention rapide et
            sécurisée, même en hauteur ou en urgence. Guêpes, frelons et autres
            nuisibles, dans toutes les zones difficiles d'accès.
          </TextCorpus>
          <ViewMoreButton sectionId="banner" text="Demander un devis" />
        </TextContainer>
        <ImageContainer>
          <Fade />
          <StaticImage
            src="../../images/who-are-we.jpg"
            alt="Ghislain Pinier sortant un nid de guêpes d'une maison"
            placeholder="blurred"
          />
        </ImageContainer>
      </ColumnContainer>
    </Section>
  );
};

export default WhoAreWe;
