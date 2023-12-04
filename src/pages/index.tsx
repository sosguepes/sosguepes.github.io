import * as React from "react";
import type { PageProps } from "gatsby";
import PageLayout from "components/PageLayout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>It Works!</h1>
      <p>Hello</p>
    </PageLayout>
  );
};

export const Head = () => <title>SOS guêpes 74</title>;

export default IndexPage;
