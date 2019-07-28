module.exports = {
  siteMetadata: {
    title: `James Dora | React Developer`,
    description: `My name is James Dora, and I am Javascript/React Developer. I have an insatiable appetite for learning new things and expanding my skillset. Nothing gives me a stronger sense of satisfaction than picking up a new skill, implimenting it into a project, and building a gorgeous, functional, web application which people will actually use.`,
    author: `@jamesdoraiii`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-netlify`,
  ],
}
