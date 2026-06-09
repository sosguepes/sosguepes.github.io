import { styled } from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 32px;
  max-width: 1080px;
  margin: auto;
`;

export const ImageContainer = styled.div`
  position: relative;
  @media screen and (min-width: 40em) {
    width: 50%;
  }
`;

export const NameText = styled.h3`
  text-size: 18px;
  margin-bottom: 5px;
`;

export const SubNameText = styled.p`
  margin-top: 0px;
  margin-bottom: 5px;
`;

export const Fade = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin: 0px 22px 0px 22px;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 40em) {
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    margin: 5px 32px 0px 32px;
  }
`;

export const TextCorpus = styled.p`
  text-align: justify;
  @media screen and (min-width: 40em) {
    text-align: center;
  }
`;
export const TextContainer = styled.div`
  @media screen and (min-width: 40em) {
    width: 50%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;
