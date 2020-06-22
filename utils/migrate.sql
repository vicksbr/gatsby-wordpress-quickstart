UPDATE wp_options SET option_value = replace(option_value, 'https://wp-flapper.raccoon.ag/', 'http://localhost') WHERE option_name = 'home' OR option_name = 'siteurl';
UPDATE wp_posts SET guid = replace(guid, 'https://wp-flapper.raccoon.ag/','http://localhost');
UPDATE wp_posts SET post_content = replace(post_content, 'https://wp-flapper.raccoon.ag/', 'http://localhost');
UPDATE wp_postmeta SET meta_value = replace(meta_value,'https://wp-flapper.raccoon.ag/','http://localhost');
UPDATE wp_users SET user_pass = MD5('admin') WHERE wp_users.ID = 1;

