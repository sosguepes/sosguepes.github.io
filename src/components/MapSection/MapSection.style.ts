import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin: 0px 32px 0px 32px;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 40em) {
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    margin: 32px 32px 0px 32px;
  }
`;

export const Wrapper = styled.section`
  max-width: 1080px;
  margin: auto;
`;
