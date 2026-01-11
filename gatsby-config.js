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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `./favicon.ico`,
      },
    },
  ],
};
