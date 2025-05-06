import { useSiteMetadata } from "hooks/useSiteMetadata";
import React from "react";

interface PropsType {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export const SEO = ({ title, description, pathname, children }: PropsType) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    phoneNumber,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <script type="application/ld+json">
        {`
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "url": "https://sosguepes74.fr/",
  "name": "SOS Guêpes 74",
  "address": {
    "postalCode": "74500",
    "streetAddress": "544 route de Vougron",
    "addressLocality": "Féternes",
    "addressCountry": "FR"
  },
  "image": "${image}",
  "telephone": "${phoneNumber}",
  "priceRange": "$",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "${phoneNumber}",
    "contactType": "Manager"
  },
  "keywords": "guêpes,frelons,nid,expert,Haute Savoie,74,Chablais",
  "currenciesAccepted": "EUR",
  "openingHours": "Mo,Su 6:00-21:00"
}
        `}
      </script>
      {children}
    </>
  );
};
