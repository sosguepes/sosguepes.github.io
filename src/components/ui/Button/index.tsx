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

interface SubmitButtonProps {
  primary?: boolean;
  children: ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  transparent?: boolean;
}

export const LinkButton = ({
  primary,
  children,
  href,
  className,
  title,
}: PropsType) => (
  <Wrapper className={className}>
    <Link to={href} title={title}>
      <Container $primary={primary}>{children}</Container>
    </Link>
  </Wrapper>
);

export const SubmitButtom = ({
  primary,
  children,
  onClick,
  className,
  disabled,
  transparent,
}: SubmitButtonProps) => {
  return (
    <Wrapper className={className}>
      <div onClick={!disabled ? onClick : () => undefined}>
        <Container
          $primary={primary}
          $disabled={disabled}
          $transparent={transparent}
        >
          {children}
        </Container>
      </div>
    </Wrapper>
  );
};
