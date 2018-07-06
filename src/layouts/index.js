import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.scss'

import appleTouchIcon from '../layouts/images/apple-touch-icon.png'
import favicon32 from '../layouts/images/favicon-32x32.png'
import favicon16 from '../layouts/images/favicon-16x16.png'
import safariPinned from '../layouts/images/safari-pinned-tab.svg'

const Layout = ({ children, data }) => (
  <div className="full">
    <Helmet>
      <title>{data.site.siteMetadata.title} - Front End Developer in Nashua NH</title>
      <meta name="description" content="Front end web developer in Nashua, New Hampshire. I can do HTML, CSS, JS, jQuery, React, and also some back-end work." />
      <meta name="keywords" content="front end development, web developer, web development, javascript, jquery, react, html, css" />
      <link rel="canonical" href="https://mcculloughjchris.com/" />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="mask-icon" href={safariPinned} color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-121919441-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-121919441-1');
      </script>
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
