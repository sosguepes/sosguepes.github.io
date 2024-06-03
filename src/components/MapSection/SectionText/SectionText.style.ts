import ViewMoreButton from "components/ViewMoreButton";
import { SecondaryTitle } from "components/ui/SecondayTitle";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 40em) {
    width: calc(50% - 25px);
  }
`;

export const AreaOfInterventionText = styled.p`
  margin-top: 0px;
`;

export const AskForQuoteButton = styled(ViewMoreButton)`
  margin-bottom: 16px;

  @media screen and (min-width: 40em) {
    margin-bottom: 0px;
  }
`;

export const MapSectionTitle = styled(SecondaryTitle)`
  @media screen and (min-width: 40em) {
    margin-top: 0px;
  }
`;
