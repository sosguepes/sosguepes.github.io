import styled from "styled-components";
import { titleStyle } from "components/ui/Title";

export const SecondaryTitle = styled.h2`
  ${titleStyle}
  font-size: 22px;
  margin-top: 32px;

  @media screen and (min-width: 52em) {
    font-size: 30px;
  }
`;
