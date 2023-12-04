import React, { ReactNode } from "react";
import { PageContainer } from "./PageLayout.style";

interface PropsType {
  children: ReactNode;
}

const PageLayout = ({ children }: PropsType) => (
  <PageContainer>{children}</PageContainer>
);

export default PageLayout;
