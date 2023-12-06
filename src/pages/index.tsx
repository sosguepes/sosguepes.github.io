import * as React from "react";
import type { PageProps } from "gatsby";
import NavBar from "components/NavBar";
import Banner from "components/Banner";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <NavBar />
      <main>
        <Banner />
      </main>
    </>
  );
};

export const Head = () => <title>SOS guêpes 74</title>;

export default IndexPage;
