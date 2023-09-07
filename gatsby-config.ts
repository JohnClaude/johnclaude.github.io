import type { GatsbyConfig } from "gatsby";
import { resolve } from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `masiphumelele`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-remark-related-posts",
      options: {
        doc_lang: "en", // optional
        target_node: "MarkdownRemark", // optional
        getMarkdown: (node: any) => node.rawMarkdownBody, // optional
        each_bow_size: 1, // optional
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    `gatsby-transformer-remark`,
  ],
};

export default config;
