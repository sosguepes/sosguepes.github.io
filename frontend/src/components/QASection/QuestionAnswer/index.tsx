import React, { useRef, useState } from "react";
import {
  Answer,
  Container,
  ExpandedContainer,
  Question,
  QuestionContainer,
} from "./QuestionAnswer.style";
import { StaticImage } from "gatsby-plugin-image";

interface PropsType {
  question: string;
  children: React.ReactNode;
}

export const QuestionAnswer = ({ question, children }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <Container>
      <QuestionContainer
        onClick={() => setIsOpen(!isOpen)}
        style={isOpen ? { borderBottom: "1px solid #d3d3d3" } : {}}
      >
        <Question>{question}</Question>
        <StaticImage
          src="./arrow_up_icon.png"
          alt="arrow up icon"
          style={{
            width: "15px",
            height: "15px",
            transition: "rotate 0.5s",
            rotate: `${isOpen ? "0" : "-180"}deg`,
          }}
        />
      </QuestionContainer>
      <ExpandedContainer
        ref={contentRef}
        style={
          isOpen && contentRef.current
            ? {
                height: contentRef.current.scrollHeight + "px",
              }
            : { height: "0px" }
        }
      >
        <Answer>{children}</Answer>
      </ExpandedContainer>
    </Container>
  );
};
