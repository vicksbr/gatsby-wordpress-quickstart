module.exports = {
  siteMetadata: {
    title: `Raccoon Gatsby Wordpress Starter`,
    description: `Boilerplate Gatsby+Wordpress.`,
    author: `Raccoon`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images`, },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "localhost",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: ['options_pt_BR', 'options_en_US'],
        excludedRoutes: [
          "/wp/v2/users/me",
          "/acf/v2/options",
          "/wp/v2/settings",
          "/wp/v2/themes",
          "/yoast/v1/indexation/posts",
          "/yoast/v1/indexation/terms",
          "/yoast/v1/indexation/post-type-archives",
          "/yoast/v1/indexation/general",
          "/yoast/v1/indexation/prepare",
          "/yoast/v1/indexation/complete",
          "/yoast/v1/configurator",
          "/yoast/v1/reindex_posts",
          "/yoast/v1/file_size",
          "/yoast/v1/statics",
          "/yoast/v1/myyoast/connect",
          "/yoast/v1/get_head",
          "/yoast/v1/statistics"
        ],
        verboseOutput: false,
      }
    }
  ],
}
