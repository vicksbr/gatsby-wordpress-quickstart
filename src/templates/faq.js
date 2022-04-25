import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"


const Faq = ({ data, location }) => {
    const {
        wordpressPage: {
            title,
            yoast_head: pageSEO,
            polylang_current_lang: currentPageLanguage,
            polylang_translations: currentPageTranslationsMeta
        },
    } = data

    return (
        <Layout
            currentPageLocation={location}
            currentPageLanguage={currentPageLanguage}
            currentPageTranslationsMeta={currentPageTranslationsMeta}
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
        wordpressAcfPages(wordpress_id: {eq: $wordpress_id}) {
            acf {           
              faq_title
            }
          }
    }
`


export default Faq