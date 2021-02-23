const path = require("path")
require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `G&L Casamento`,
    description: `Casamento de Guilherme e Luana em São Sebastião - São Paulo. Este site irá lhe ajudar a tirar suas dúvidas.`,
    author: `Guilherme e Luana`,
    siteUrl: `https://guilhermeeluana.com.br`,
    email: `guibellotti@hotmail.com`,
    phone: `5511984098171`,
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
              staticFolderName: "static",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1280,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-images-zoom",
          },
          `gatsby-remark-lazy-load`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@": path.join(__dirname, "src/components"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Didact Gothic",
            weights: ["400"],
          },
          {
            family: "Cormorant",
            weights: ["400"],
          },
          {
            family: "Josefin Sans",
            weights: ["300"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Casamento - Guilherme e Luana`,
        short_name: `G&L Casamento`,
        start_url: `/`,
        background_color: `#4B6A7E`,
        theme_color: `#4B6A7E`,
        display: `minimal-ui`,
        icon: `static/img/icon-app.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -50,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true,
        id: process.env.HOTJAR,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-transition-link`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
