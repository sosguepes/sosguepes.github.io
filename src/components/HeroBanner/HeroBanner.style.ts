import { styled } from "styled-components";
import PriceDisclaimer from "components/PriceDisclaimer";
import { primaryColor } from "style";
import { titleStyle } from "components/ui/Title";

export const Section = styled.section`
  padding-bottom: 32px;
  padding-top: 16px;
  width: 100%;
  background-color: ${primaryColor};

  @media screen and (min-width: 40em) {
    padding-bottom: 64px;
    padding-top: 32px;
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
  max-width: 450px;
  @media screen and (min-width: 40em) {
    width: 50%;
  }
`;

export const TextTitle = styled.h1`
  ${titleStyle}
  font-size: 28px;
  margin-top: 0px;

  @media screen and (min-width: 52em) {
    font-size: 40px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledPriceDisclaimer = styled(PriceDisclaimer)`
  margin-left: 16px;
`;

export const SubTitle = styled.p`
  display: none;

  @media screen and (min-width: 52em) {
    display: block;
  }
`;
