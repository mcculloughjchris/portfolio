module.exports = {
  siteMetadata: {
    title: 'Chris McCullough',
    siteUrl: 'https://mcculloughjchris.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-next',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-121919441-1",
        anonymize: true,
        respectDNT: true
      }
    }
  ],
}
