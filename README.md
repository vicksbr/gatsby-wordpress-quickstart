main wordpress api endpoint:

  http://localhost/wp-json/wp/v2


utilizar o container com o wpcli utilizando o bash:

  docker-compose run --rm wpcli bash

---

plugins instalados: 

  +------------------------------------+----------+-----------+---------+
  | name                               | status   | update    | version |
  +------------------------------------+----------+-----------+---------+
  | acf-options-for-polylang           | active   | none      | 1.1.7   |
  | acf-to-rest-api                    | active   | none      | 3.2.0   |
  | advanced-custom-fields             | active   | available | 5.8.7   |
  | advanced-custom-fields-table-field | active   | available | 1.3.9   |
  | advanced-custom-fields-pro         | active   | available | 5.8.2   |
  | polylang                           | active   | none      | 2.7.3   |
  | wp-graphql-master                  | active   | none      | 0.7.0   |
  | wp-rest-polylang                   | active   | none      | 1.0.0   |
  | wp-api-menus                       | active   | none      | 1.3.1   |
  | wordpress-seo                      | active   | available | 14.2    |
  +------------------------------------+----------+-----------+---------+







exemplos: 

  https://github.com/LekoArts/portfolio -> i18n + polylang
  gatsby + polylang: https://github.com/gatsbyjs/gatsby/pull/10942
  gatsby + polylang: https://github.com/gatsbyjs/gatsby/issues/10537


  links uteis:
  
  https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/blob/master/docs/tutorials/configuring-wp-gatsby.md#setting-up-preview