import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const Home = ({ data, location }) => {
    const {
        acfPage,
        wordpressPage: {
            title,
            yoast_head: pageSEO,
            polylang_current_lang: currentPageLanguage,
        },

    } = data

    const homeTranslationsMeta = [
        { path: '/', polylang_current_lang: 'pt_BR' },
        { path: '/en', polylang_current_lang: 'en_US' }
    ]

    return (
        <Layout
            currentPageLocation={location}
            currentPageLanguage={currentPageLanguage}
            currentPageTranslationsMeta={homeTranslationsMeta}
        >
            <pre>
                {JSON.stringify({ pagePath: location.pathname, pageLanguage: currentPageLanguage, pageProps: data }, null, 4)}
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
                home_first_text
                home_second_text
                home_title
                home_image { localFile { childImageSharp { fixed { src } } } }
            }
        }
    }
`


export default Home