import Button from "components/ui/Button";
import React from "react";

interface PropsType {
  sectionId: string;
  className?: string;
}

const ViewMoreButton = ({ className, sectionId }: PropsType) => (
  <Button href={`#${sectionId}`} primary>
    <span>Voir plus</span>
  </Button>
);

export default ViewMoreButton;
