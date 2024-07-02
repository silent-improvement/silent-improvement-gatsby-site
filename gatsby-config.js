/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/silent-improvement-gatsby-site",
  siteMetadata: {
    title: `silent-improvement`,
    description: `My static site that has been 'Gatsby'ified.`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
  ],
};