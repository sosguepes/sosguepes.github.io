import { SecondaryTitle } from "components/ui/SecondayTitle";
import React from "react";
import { Section, StyledServiceItem } from "./ServiceSection.style";
import { graphql, useStaticQuery } from "gatsby";

export const ServiceSection = () => {
  const data = useStaticQuery(graphql`
    query ServiceQuery {
      allFile(
        filter: {
          sourceInstanceName: { eq: "services" }
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
    <Section id="services">
      <SecondaryTitle>Nos services</SecondaryTitle>
      <div>
        {data.allFile.edges.map((item: any) => (
          <StyledServiceItem
            key={item.node.childMdx.frontmatter.text}
            text={item.node.childMdx.frontmatter.text}
            icon={
              item.node.childMdx.frontmatter.icon.childImageSharp
                .gatsbyImageData
            }
            alt={item.node.childMdx.frontmatter.alt}
          />
        ))}
      </div>
    </Section>
  );
};
