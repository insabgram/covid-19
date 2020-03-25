module.exports = {
  siteMetadata: {
    title: `Covid-19 Tracker`,
    description: `A quickie update on Covid-19 (Malaysian Edition)`,
    author: `@insabgram`,
    siteUrl: `https://gatsby.dev`,
    social: {
      twitter: `insabgram`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-remove-serviceworker`
  ],
}