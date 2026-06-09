import {
  darkPrimaryColor,
  primaryColor,
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
} from "style";
import { styled } from "styled-components";

export const Container = styled.div<{ $primary?: boolean }>`
  background-color: ${(props) =>
    props.$primary ? primaryColor : secondaryColor};
  color: ${(props) => (props.$primary ? primaryTextColor : secondaryTextColor)};
  padding: 16px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  width: fit-content;

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) =>
        props.$primary ? darkPrimaryColor : secondaryColor};
    }
  }
`;

export const Wrapper = styled.div`
  &:not(:only-child) {
    &:last-child {
      margin-left: 8px;
    }
  }
`;
