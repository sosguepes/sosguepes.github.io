import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          phoneNumber
          image
          siteUrl
          keywords
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
