import React, { ReactNode } from "react";
import { Container, Wrapper } from "./Button.style";
import { Link } from "gatsby";

interface PropsType {
  primary?: boolean;
  children: ReactNode;
  href: string;
  className?: string;
  title?: string;
}

const Button = ({ primary, children, href, className, title }: PropsType) => (
  <Wrapper className={className}>
    <Link to={href} title={title}>
      <Container $primary={primary}>{children}</Container>
    </Link>
  </Wrapper>
);

export default Button;
