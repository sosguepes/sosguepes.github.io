import React from "react";
import { Container, LogoWrapper, ColorWrapper } from "./NavBar.style";
import Logo from "components/Logo";

const NavBar = () => (
  <ColorWrapper>
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <h2>SOS Guêpes 74</h2>
    </Container>
  </ColorWrapper>
);

export default NavBar;
