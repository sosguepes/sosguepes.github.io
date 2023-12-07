import React, { ReactNode } from "react";
import { Container, Wrapper } from "./Button.style";

interface PropsType {
  primary?: boolean;
  children: ReactNode;
  href: string;
}

const Button = ({ primary, children, href }: PropsType) => (
  <Wrapper>
    <a href={href}>
      <Container $primary={primary}>{children}</Container>
    </a>
  </Wrapper>
);

export default Button;
