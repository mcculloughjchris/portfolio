import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.scss'

const Layout = ({ children, data }) => (
  <div className="full">
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content="Front end web developer in Nashua New Hampshire" />
      <meta name="keywords" content="front end development, web developer, web development" />
      <link rel="canonical" href="https://mcculloughjchris.com/" />
    </Helmet>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
