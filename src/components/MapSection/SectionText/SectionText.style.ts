import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 40em) {
    width: calc(50% - 25px);
  }
`;
