import React from "react";
import { Map } from "./Map";
import { Container } from "./MapSection.style";
import { SectionText } from "./SectionText";

const MapSection = () => {
  return (
    <Container>
      <Map />
      {/* <SectionText /> */}
    </Container>
  );
};

export default MapSection;
