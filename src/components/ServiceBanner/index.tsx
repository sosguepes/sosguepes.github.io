import React from "react";
import {
  SecondaryTitle,
  Section,
  ServiceQualityTable,
} from "./ServiceBanner.style";
import ServiceItem from "components/ServiceItem";
import { graphql, useStaticQuery } from "gatsby";

const ServiceBanner = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          sourceInstanceName: { eq: "service-nodes" }
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
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Section id="services">
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
          />
        ))}
      </ServiceQualityTable>
    </Section>
  );
};

export default ServiceBanner;
