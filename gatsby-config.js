/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/silent-improvement-gatsby-site",
  siteMetadata: {
    title: `silent-improvement`,
    description: `My static site that has been 'Gatsby' field.`,
    siteUrl: `https://silent-improvement.github.io/silent-improvement-gatsby-site/`
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `/Users/edwardsl/Desktop/silent-improvement-gatsby/favicon.ico`,
      }
    }
  ],
};