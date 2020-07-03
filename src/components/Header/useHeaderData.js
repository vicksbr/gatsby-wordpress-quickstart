import { useStaticQuery, graphql } from "gatsby"


const getMenuByLanguage = (wordpressMenuItems, language) => {

  const worpressMenusLanguageNames = {
    pt_BR: 'header-menu-portuguese',
    en_US: 'header-menu-english',
  }

  const menu = wordpressMenuItems.filter(item => item.slug === worpressMenusLanguageNames[language])[0]
  return menu.items
}

const useHeaderData = (language = 'pt_BR') => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpApiMenusMenusItems {
        nodes {
          slug
          items { title url classes type }
        }
      }
    }
  `)

  return {
    wpMenuItems: getMenuByLanguage(data.allWordpressWpApiMenusMenusItems.nodes, language)
  }
}

export default useHeaderData

