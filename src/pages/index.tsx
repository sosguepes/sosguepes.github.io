import * as React from "react";
import type { PageProps } from "gatsby";
import NavBar from "components/NavBar";
import HeroBanner from "components/HeroBanner";
import ServiceBanner from "components/ServiceBanner";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeroBanner />
        <ServiceBanner />
      </main>
    </>
  );
};

export const Head = () => <title>SOS guêpes 74</title>;

export default IndexPage;
