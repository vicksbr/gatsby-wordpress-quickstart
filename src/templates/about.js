import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PropTypes from 'prop-types'

const AboutPage = () => {
    return (
        <Layout >
            <SEO title="about" />
            <h1>Sobre nós</h1>
            <p>Somos incríveis desenvolvedores de software!</p>
        </Layout>
    )
}

AboutPage.propTypes = {

}

export default AboutPage
