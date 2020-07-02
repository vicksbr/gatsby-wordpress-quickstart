main wordpress api endpoint:

  http://localhost/wp-json/wp/v2


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
  | wp-api-menus                       | active   | none      | 1.3.1   |
  | wordpress-seo                      | active   | available | 14.2    |
  | wp-graphql-master                  | active   | none      | 0.7.0   |
  | wp-rest-polylang                   | active   | none      | 1.0.0   |
  | polylang                           | active   | none      | 2.7.3   |


exemplos: 

  https://github.com/LekoArts/portfolio -> i18n + polylang
  gatsby + polylang: https://github.com/gatsbyjs/gatsby/pull/10942
  gatsby + polylang: https://github.com/gatsbyjs/gatsby/issues/10537


  links uteis:
  ótimo exemplo docker-compose: https://github.com/kassambara/wordpress-docker-compose  
  exemplo docker composer (read-write e etc): https://github.com/chriszarate/docker-compose-wordpress

  https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/blob/master/docs/tutorials/configuring-wp-gatsby.md#setting-up-preview


artigos úteis: 
    https://kinsta.com/pt/blog/wp-cli-v2/#useful-examples
    como setar memory_limit php.ini: https://github.com/docker-library/wordpress/issues/10 
    como setar memory_limit php.ini:https://make.wordpress.org/cli/handbook/guides/common-issues/#php-fatal-error-allowed-memory-size-of-999999-bytes-exhausted-tried-to-allocate-99-bytes

comandos úteis

```
docker-compose run --rm wpcli bash 
docker-compose run --rm --user=1000:1000 wpcli bash 
docker-compose run run --rm --user=33:33 wpcli bash

wp core install --url=localhost --title='Raccoon Boilerplate' --admin_user=admin --admin_password=admin --admin_email=fakeadmin@fakehost.fk
wp theme activate raccoon
wp rewrite structure '/%postname%/'
wp plugin activate --all 
wp package install wp-cli/doctor-command 

wp package install git@github.com:diggy/polylang-cli.git --allow-root (novo, porém com problemas)


wp plugin install wordpress-importer --activate
wp import raccoon_boilerplate.xml --authors=create

```
comandos docker:


One liner to stop / remove all of Docker containers:
docker stop $(docker ps -a -q) 
docker rm $(docker ps -a -q)
docker-compose run --rm wpcli plugin list
docker-compose run --rm wpcli bash 
docker volume ls
docker ps -a
docker-compose down -v && docker volume prune -f 
rotas página em ingles http://localhost/wp-json/wp/v2/pages?lang=en

wp config set WP_DEBUG true







usando wp doctor:
  https://guides.wp-bullet.com/using-wp-cli-doctor-command-to-fix-large-wp_options-autoload-data/

usando wp-cli-build:

https://github.com/front/wp-cli-build

plugin interessante: wp simple history
plugin interessante: https://github.com/diggy/wpdb2dict

conferir maldade:
  https://wordpress.stackexchange.com/questions/217676/get-posts-by-language-in-polylang-plugin



inserir paginas com tradução: https://wordpress.stackexchange.com/questions/224278/polylang-translation-of-a-custom-post-created-by-wp-insert-post
atualizando varios posts com acf https://bishless.com/setting-custom-field-values-on-old-wordpress-posts-in-bulk-via-wp-cli/
wpcli + bash commands: https://www.presslabs.com/code/wp-cli-guide-wp-term/


 get_posts(array('post_type' => 'post', 'lang' => 'pt'));