import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { Container } from "./ServiceItem.style";

interface PropsType {
  icon: IGatsbyImageData;
  text: string;
  alt: string;
  className?: string;
}

const ServiceItem = ({ icon, text, alt, className }: PropsType) => (
  <Container className={className || ""}>
    <GatsbyImage image={icon} alt={alt} style={{ minWidth: 30 }} />
    <p>{text}</p>
  </Container>
);

export default ServiceItem;
