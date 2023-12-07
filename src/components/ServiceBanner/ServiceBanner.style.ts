import { titleStyle } from "components/ui/Title";
import { styled } from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
`;

export const SecondaryTitle = styled.h2`
  ${titleStyle}
  font-size: 22px;
  margin-top: 32px;

  @media screen and (min-width: 52em) {
    font-size: 30px;
  }
`;
