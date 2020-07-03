const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);


const getTemplate = (phpFile) => {
  const dirPath = './src/templates'

  const templates = {
    about: 'about.js',
    blog: 'blog.js',
    faq: 'faq.js'
  }

  templatePath = templates[phpFile.split('.')[0]]
  return slash(path.resolve(`${dirPath}/${templatePath}`))
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
      {
        allWordpressPage { edges { node { template path wordpress_id polylang_current_lang } } } 
      }
    
    `);

  console.log(pages)

  pages.data.allWordpressPage.edges.forEach(({ node }) => {
    const { path, template, wordpress_id, polylang_current_lang } = node
    createPage(
      {
        path: path,
        component: getTemplate(template),
        context: { wordpress_id: wordpress_id, language: polylang_current_lang }
      }
    )
  })
}