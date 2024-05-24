import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: auto;
  max-width: 1080px;
  gap: 32px;
  align-items: center;

  @media screen and (min-width: 40em) {
    flex-direction: row;
  }
`;
