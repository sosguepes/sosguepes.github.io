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
    keywords,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
    keywords,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content="fr_FR" />
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
  "keywords": "${seo.keywords}",
  "currenciesAccepted": "EUR",
  "openingHours": "Mo,Su 6:00-21:00"
}
        `}
      </script>
      {children}
    </>
  );
};
