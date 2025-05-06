import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #d3d3d3;
  width: 100%;
  text-align: justify;
  overflow: hidden;

  &:last-child {
    border-radius: 0px 0px 10px 10px;
  }

  &:not(:last-child) {
    border-bottom: none;
  }

  &:first-child {
    border-radius: 10px 10px 0px 0px;
  }
`;

export const QuestionContainer = styled.div`
  background-color: #f5f5f5;
  padding: 16px 32px 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #eeeeee;
  }
`;

export const ExpandedContainer = styled.div`
  overflow: hidden;
  transition: height ease 0.4s;
`;
export const Answer = styled.div`
  background-color: white;
  padding: 0px 16px;
  margin: 0px 16px;
  &:last-child {
    border-radius: 0px 0px 10px 10px;
  }
`;

export const Question = styled.p`
  width: calc(100% - 30px);
  margin: 0px;
`;
