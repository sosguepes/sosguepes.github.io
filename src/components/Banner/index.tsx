import React from "react";
import {
  Container,
  Section,
  Seperator,
  TextContainer,
  ImageContainer,
  TextTitle,
} from "./Banner.style";
import { StaticImage, getImageData, GatsbyImage } from "gatsby-plugin-image";
import CallButton from "components/CallButton";
import { graphql, useStaticQuery } from "gatsby";

const Banner = () => (
  <Section>
    <Container>
      <Seperator>
        <ImageContainer>
          <StaticImage
            src="../../images/beekeeper-black.png"
            alt="Beepkeeper with wasp hive"
            placeholder="blurred"
          />
        </ImageContainer>
        <TextContainer>
          <TextTitle>Débarrassez-vous de vos nuisibles</TextTitle>
          <p>
            SOS Guêpes 74 opèrent dans toute la Haute-Savoie. Appelez Ghislain
            pour obtenir un devis!
          </p>
          <CallButton />
        </TextContainer>
      </Seperator>
    </Container>
  </Section>
);

// const Banner = () => {
//   const image = useStaticQuery(graphql`
//     query BannerImage {
//       file(relativePath: { eq: "beekeeper-black.png" }) {
//         id
//         childImageSharp {
//           gatsbyImageData(width: 540, placeholder: BLURRED)
//         }
//       }
//     }
//   `);
//   return (
//     <Section>
//       <Container>
//         <Seperator>
//           <ImageContainer>
//             <GatsbyImage
//               image={image.file.childImageSharp.gatsbyImageData}
//               alt="Beepkeeper with wasp hive"
//             />
//           </ImageContainer>
//           <TextContainer>
//             <TextTitle>Débarrassez-vous de vos nuisibles</TextTitle>
//             <p>
//               SOS Guêpes 74 opèrent dans toute la Haute-Savoie. Appelez Ghislain
//               pour obtenir un devis!
//             </p>
//             <CallButton />
//           </TextContainer>
//         </Seperator>
//       </Container>
//     </Section>
//   );
// };

export default Banner;
