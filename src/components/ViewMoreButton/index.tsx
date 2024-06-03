import Button from "components/ui/Button";
import React from "react";

interface PropsType {
  sectionId: string;
  text?: string;
  className?: string;
}

const ViewMoreButton = ({ sectionId, text, className }: PropsType) => (
  <Button href={`#${sectionId}`} primary className={className}>
    <span>{text || "Voir plus"}</span>
  </Button>
);

export default ViewMoreButton;
