import React from "react";
import { Container } from "./Footer.style";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <p>Copyright © {currentYear} - SOS Guêpes 74</p>
    </Container>
  );
};

export default Footer;
