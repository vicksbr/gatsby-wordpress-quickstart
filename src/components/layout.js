/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header";
import Footer from "./footer"
import "./layout.css"


const Layout = ({ children, ...props }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site { siteMetadata { title } }
    }
  `)

  const {
    currentPageLocation,
    currentPageLanguage,
    currentPageTranslationsMeta
  } = props

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        currentPageLocation={currentPageLocation}
        currentPageLanguage={currentPageLanguage}
        currentPageTranslationsMeta={currentPageTranslationsMeta}
      />
      <div style={{ margin: `0 auto`, maxWidth: 960, padding: `0 1.0875rem 0`, }} >
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
