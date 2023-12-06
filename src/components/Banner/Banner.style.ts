import { styled } from "styled-components";

export const Section = styled.div`
  padding-bottom: 32px;
  padding-top: 16px;
  width: 100%;

  @media screen and (min-width: 40em) {
    padding-bottom: 64px;
    padding-top: 64px;
  }
`;

export const Container = styled.section`
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  padding-left: 32px;
  padding-right: 32px;
`;

export const Seperator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  @media screen and (min-width: 40em) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 40em) {
    width: 50%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 540px;
  @media screen and (min-width: 40em) {
    width: 50%;
  }
`;

export const TextTitle = styled.h1`
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 16px;
  font-size: 32px;
  font-family: "DM Sans", sans-serif;
  margin-top: 0px;

  @media screen and (min-width: 52em) {
    font-size: 48px;
  }
`;
