wp core install --url=localhost --title='Raccoon Boilerplate' --admin_user=admin --admin_password=admin --admin_email=fakeadmin@fakehost.fk
wp theme activate raccoon
wp rewrite structure '/%postname%/'
wp plugin activate --all 
wp package install wp-cli/doctor-command 
