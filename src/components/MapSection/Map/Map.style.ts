import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  width: 100%;
  @media screen and (min-width: 40em) {
    width: calc(50% - 25px);
  }
  height: 233px;
`;
