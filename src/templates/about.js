import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"


const About = ({ data, location }) => {
    const { wordpressPage: { title, yoast_head: pageSEO, polylang_current_lang: currentLanguage, polylang_translations: translationPages }, acfPage } = data

    return (
        <Layout
            pageLocation={location}
            currentLanguage={currentLanguage}
            translationPages={translationPages}
        >
            <pre>
                {JSON.stringify(data, null, 2)}
                {JSON.stringify(acfPage, null, 2)}

            </pre>
        </Layout>
    )
}


export const pageQuery = graphql`
    query ($wordpress_id: Int) {
        wordpressPage(wordpress_id: { eq: $wordpress_id}) {
            title
            content
            polylang_current_lang
            polylang_translations { path polylang_current_lang }
            yoast_head
        }
        wordpressAcfPages(wordpress_id: { eq: $wordpress_id}) {
            acf {
                about_description
                about_title
            }
        }
    }
`


export default About