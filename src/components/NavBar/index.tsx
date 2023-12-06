import React from "react";
import { Container, LogoWrapper } from "./NavBar.style";
import Logo from "components/Logo";

const NavBar = () => (
  <Container>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <h2>SOS Guêpes 74</h2>
  </Container>
);

export default NavBar;
