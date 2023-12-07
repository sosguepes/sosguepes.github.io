import React from "react";

interface PropsType {
  sectionId: string;
  className?: string;
}

const ViewMoreButton = ({ className, sectionId }: PropsType) => (
  <a href={`#${sectionId}`}>
    <p className={className}>Voir plus</p>
  </a>
);

export default ViewMoreButton;
