import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { Container } from "./ServiceItem.style";

interface PropsType {
  icon: IGatsbyImageData;
  text: string;
}

const ServiceItem = ({ icon, text }: PropsType) => (
  <Container>
    <GatsbyImage image={icon} alt="Phone icon" />
    <p>{text}</p>
  </Container>
);

export default ServiceItem;
