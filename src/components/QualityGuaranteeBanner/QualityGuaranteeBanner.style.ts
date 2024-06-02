import { styled } from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 40em) {
    margin-bottom: 32px;
  }
`;

export const ServiceQualityTable = styled.div`
  max-width: 1080px;
  padding-left: 32px;
  padding-right: 32px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  @media screen and (min-width: 40em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (min-width: 52em) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;
