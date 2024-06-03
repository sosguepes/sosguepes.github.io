import * as React from "react";
import type { PageProps } from "gatsby";
import NavBar from "components/NavBar";
import HeroBanner from "components/HeroBanner";
import QualityGuaranteeBanner from "components/QualityGuaranteeBanner";
import Footer from "components/Footer";
import MapSection from "components/MapSection";
import { QASection } from "components/QASection";
import { ServiceSection } from "components/ServiceSection";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeroBanner />
        <QualityGuaranteeBanner />
        <MapSection />
        <ServiceSection />
        <QASection />
      </main>
      <Footer />
    </>
  );
};

export const Head = () => <title>SOS guêpes 74</title>;

export default IndexPage;
