import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import NavBar from "components/NavBar";
import HeroBanner from "components/HeroBanner";
import QualityGuaranteeBanner from "components/QualityGuaranteeBanner";
import Footer from "components/Footer";
import MapSection from "components/MapSection";
import { QASection } from "components/QASection";
import { ServiceSection } from "components/ServiceSection";
import { SEO } from "components/SEO";
import WhoAreWe from "components/WhoAreWe";
import { InstagramPosts } from "components/InstagramPosts";
import { HelmetProvider } from "react-helmet-async";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <HelmetProvider>
      <NavBar />
      <main>
        <HeroBanner />
        <QualityGuaranteeBanner />
        <MapSection />
        <ServiceSection />
        <WhoAreWe />
        <QASection />
        <InstagramPosts />
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export const Head: HeadFC = () => (
  <>
    <html lang="fr" />
    <SEO />
  </>
);
export default IndexPage;
