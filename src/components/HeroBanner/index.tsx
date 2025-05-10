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
  Wrapper,
} from "./HeroBanner.style";
import { StaticImage } from "gatsby-plugin-image";
import CallButton from "components/CallButton";

const HeroBanner = () => (
  <Section id="banner">
    <Wrapper>
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
              Expert en nids de guêpes et de frelons dans le Chablais
            </TextTitle>
            <p>
              SOS Guêpes 74, votre spécialiste local pour une intervention
              rapide même dans les zones les plus difficiles d'accès. Contactez
              Ghislain pour un devis !
            </p>
            <ButtonContainer>
              <CallButton />
              <StyledViewMoreButton sectionId="quality-guarantees" />
            </ButtonContainer>
          </TextContainer>
        </Seperator>
      </Container>
    </Wrapper>
  </Section>
);

export default HeroBanner;
