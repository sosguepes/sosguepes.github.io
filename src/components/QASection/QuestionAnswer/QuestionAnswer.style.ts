import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  width: 100%;
  text-align: justify;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const QuestionContainer = styled.div`
  background-color: #eeeeee;
  padding: 16px 32px 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ExpandedContainer = styled.div`
  overflow: hidden;
  transition: height ease 0.4s;
`;
export const Answer = styled.div`
  background-color: white;
  padding: 0px 16px;
`;

export const Question = styled.div`
  margin-right: 16px;
`;
