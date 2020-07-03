const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

const getHomePath = (path, pageLanguage) => {
  if (pageLanguage === "pt_BR")
    return '/'

  console.log(`/${path.split('/')[1]}`)
  return `/${path.split('/')[1]}`

}

const getTemplate = (phpFile) => {
  const dirPath = './src/templates'

  const templates = {
    about: 'about.js',
    blog: 'blog.js',
    faq: 'faq.js',
    home: 'home.js'
  }

  const templatePath = templates[phpFile.split('.')[0]]
  return slash(path.resolve(`${dirPath}/${templatePath}`))
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`{ allWordpressPage { edges { node { template path wordpress_id polylang_current_lang } } } } `);


  pages.data.allWordpressPage.edges.forEach(({ node }) => {
    const { path, template, wordpress_id, polylang_current_lang } = node

    createPage({
      path: template === 'home.php' ? getHomePath(path, polylang_current_lang) : path,
      component: getTemplate(template),
      context: { wordpress_id: wordpress_id, language: polylang_current_lang }
    })
  })
}

