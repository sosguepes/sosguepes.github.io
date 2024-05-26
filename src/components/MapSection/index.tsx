import React from "react";
import { Map } from "./Map";
import { Container, Wrapper } from "./MapSection.style";
import { SectionText } from "./SectionText";

const MapSection = () => {
  return (
    <Wrapper>
      <Container>
        <Map />
        <SectionText />
      </Container>
    </Wrapper>
  );
};

export default MapSection;
