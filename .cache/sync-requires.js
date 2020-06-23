const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/pedro/RaccoonProjects/gatsby-wordpress-quickstart/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/pedro/RaccoonProjects/gatsby-wordpress-quickstart/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/pedro/RaccoonProjects/gatsby-wordpress-quickstart/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/pedro/RaccoonProjects/gatsby-wordpress-quickstart/src/pages/blog.js"))),
  "component---src-pages-faq-js": hot(preferDefault(require("/home/pedro/RaccoonProjects/gatsby-wordpress-quickstart/src/pages/faq.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/pedro/RaccoonProjects/gatsby-wordpress-quickstart/src/pages/index.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("/home/pedro/RaccoonProjects/gatsby-wordpress-quickstart/src/pages/login.js")))
}

