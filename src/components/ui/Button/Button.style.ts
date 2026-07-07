import {
  darkPrimaryColor,
  primaryColor,
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
  concrete,
  lightGrey,
} from "style";
import { styled } from "styled-components";

export const Container = styled.div<{
  $primary?: boolean;
  $disabled?: boolean;
  $transparent?: boolean;
}>`
  ${(props) =>
    !props.$transparent &&
    `background-color:
    ${props.$disabled ? lightGrey : props.$primary ? primaryColor : secondaryColor};`}
  color: ${(props) =>
    props.$transparent
      ? "black"
      : props.$primary
        ? primaryTextColor
        : secondaryTextColor};
  padding: 16px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  width: fit-content;

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) =>
        props.$transparent
          ? concrete
          : props.$primary
            ? darkPrimaryColor
            : secondaryColor};
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
