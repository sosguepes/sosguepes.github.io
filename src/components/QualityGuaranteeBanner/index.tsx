import React from "react";
import { Section, ServiceQualityTable } from "./QualityGuaranteeBanner.style";
import ServiceItem from "components/ServiceItem";
import { graphql, useStaticQuery } from "gatsby";
import { SecondaryTitle } from "components/ui/SecondayTitle";

const QualityGuaranteeBanner = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          sourceInstanceName: { eq: "quality-guarantees" }
          childMdx: { frontmatter: { text: { ne: null } } }
        }
      ) {
        edges {
          node {
            id
            childMdx {
              frontmatter {
                text
                icon {
                  childImageSharp {
                    gatsbyImageData(width: 40, placeholder: BLURRED)
                  }
                }
                alt
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Section id="quality-guarantees">
      <SecondaryTitle>À partir de 90€ TTC</SecondaryTitle>
      <ServiceQualityTable>
        {data.allFile.edges.map((item: any) => (
          <ServiceItem
            key={item.node.childMdx.frontmatter.text}
            text={item.node.childMdx.frontmatter.text}
            icon={
              item.node.childMdx.frontmatter.icon.childImageSharp
                .gatsbyImageData
            }
            alt={item.node.childMdx.frontmatter.alt}
          />
        ))}
      </ServiceQualityTable>
    </Section>
  );
};

export default QualityGuaranteeBanner;
