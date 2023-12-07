import React from "react";
import {
  Container,
  Section,
  Seperator,
  TextContainer,
  ImageContainer,
  TextTitle,
  ButtonContainer,
  StyledViewMoreButton,
  SubTitle,
} from "./HeroBanner.style";
import { StaticImage } from "gatsby-plugin-image";
import CallButton from "components/CallButton";

const HeroBanner = () => (
  <Section>
    <Container>
      <Seperator>
        <ImageContainer>
          <StaticImage
            src="../../images/beekeeper-black.png"
            alt="Beepkeeper with wasp hive"
            placeholder="blurred"
          />
        </ImageContainer>
        <TextContainer>
          <TextTitle>
            Spécialiste en destruction de guêpes et de frelons dans le Chablais
          </TextTitle>
          <SubTitle>
            SOS Guêpes 74 opère dans toute la région du Chablais et ses
            alentours. Appelez Ghislain pour obtenir un devis!
          </SubTitle>
          <ButtonContainer>
            <CallButton />
            <StyledViewMoreButton sectionId="services" />
          </ButtonContainer>
        </TextContainer>
      </Seperator>
    </Container>
  </Section>
);

export default HeroBanner;
