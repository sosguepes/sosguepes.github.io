import React from "react";
import {
  Container,
  Section,
  Seperator,
  TextContainer,
  ImageContainer,
  TextTitle,
  ButtonContainer,
  Wrapper,
} from "./QuoteGeneratorBanner.style";
import { StaticImage } from "gatsby-plugin-image";
import CallButton from "components/CallButton";
import { LinkButton } from "components/ui/Button";

export const QuoteGeneratorLink = () => (
  <LinkButton href="/" primary title="Voir les services">
    <span>Revenir aux services</span>
  </LinkButton>
);

const QuoteGeneratorBanner = () => (
  <Section id="banner">
    <Wrapper>
      <Container>
        <Seperator>
          <ImageContainer>
            <StaticImage
              src="../../images/quote-generation-banner.png"
              alt="Quote generation banner"
              placeholder="blurred"
            />
          </ImageContainer>
          <TextContainer>
            <TextTitle>Generer un devis en ligne</TextTitle>
            <ButtonContainer>
              <QuoteGeneratorLink />
              <CallButton />
            </ButtonContainer>
          </TextContainer>
        </Seperator>
      </Container>
    </Wrapper>
  </Section>
);

export default QuoteGeneratorBanner;
