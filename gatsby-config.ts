import type { GatsbyConfig } from "gatsby";

const siteUrl = "https://sosguepes74.fr/";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "SOS Guêpes 74 - Destruction nids de guêpes et de frelons",
    siteUrl,
    description:
      "SOS Guêpes 74 – Intervention rapide et efficace pour la destruction de nids de guêpes et de frelons en Haute-Savoie (74). Service professionnel, sécurisé et garanti. Devis gratuit 7j/7.",
    image: "/logo.png",
    phoneNumber: "+330681152482",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
        web: [
          {
            name: "DM Sans",
            file: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "quality-guarantees",
        path: `${__dirname}/quality-guarantees`,
      },
      __key: "quality-guarantees",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "services",
        path: `${__dirname}/services`,
      },
      __key: "services",
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-BD2ZWLCTW1"],
        pluginConfig: {
          head: false,
        },
      },
    },
  ],
};

export default config;
