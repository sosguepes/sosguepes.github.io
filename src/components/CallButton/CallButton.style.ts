import { secondaryColor } from "style";
import { styled } from "styled-components";

export const Container = styled.div``;

export const Link = styled.a`
  text-decoration: none;
`;

export const Button = styled.div`
  background-color: ${secondaryColor};
  color: #ffffff;
  padding: 16px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  width: fit-content;
  gap: 8px;
`;
