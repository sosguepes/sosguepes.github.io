import { primaryColor } from "style";
import { styled } from "styled-components";

export const ColorWrapper = styled.header`
  background-color: ${primaryColor};
`;

export const Container = styled.nav`
  margin-left: auto;
  margin-right: auto;
  padding-top: 8px;
  max-width: 1280px;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  margin-right: 16px;
`;
