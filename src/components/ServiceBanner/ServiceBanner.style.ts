import { titleStyle } from "components/ui/Title";
import { styled } from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SecondaryTitle = styled.h2`
  ${titleStyle}
  font-size: 22px;
  margin-top: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 52em) {
    font-size: 30px;
  }
`;

export const ServiceQualityTable = styled.div`
  max-width: 1080px;
  padding-left: 32px;
  padding-right: 32px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  @media screen and (min-width: 52em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (min-width: 60em) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;
