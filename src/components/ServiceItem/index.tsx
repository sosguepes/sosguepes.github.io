import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { Container } from "./ServiceItem.style";

interface PropsType {
  icon: IGatsbyImageData;
  text: string;
  alt: string;
}

const ServiceItem = ({ icon, text, alt }: PropsType) => (
  <Container>
    <GatsbyImage image={icon} alt={alt} />
    <p>{text}</p>
  </Container>
);

export default ServiceItem;
