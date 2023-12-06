import React from "react";
import {
  Container,
  Section,
  Seperator,
  TextContainer,
  LogoContainer,
  TextTitle,
} from "./Banner.style";
import { StaticImage } from "gatsby-plugin-image";
import CallButton from "components/CallButton";

const Banner = () => (
  <Section>
    <Container>
      <Seperator>
        <LogoContainer>
          <StaticImage
            src="../../images/beekeeper-black.png"
            alt="Beepkeeper with wasp hive"
            placeholder="blurred"
          />
        </LogoContainer>
        <TextContainer>
          <TextTitle>Débarrassez-vous de vos nuisibles</TextTitle>
          <p>
            SOS Guêpes 74 opèrent dans toute la Haute-Savoie. Appelez Ghislain
            pour obtenir un devis!
          </p>
          <CallButton />
        </TextContainer>
      </Seperator>
    </Container>
  </Section>
);

export default Banner;
