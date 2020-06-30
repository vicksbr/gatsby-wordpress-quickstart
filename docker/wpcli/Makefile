install: configure

configure:

	@echo "⚙️ Configuring Wordpress parameters..."
	wp core install \
		--path=/var/www/html \
		--url=localhost \
		--title="Raccon Boilerplate" \
		--admin_user=admin \
		--admin_password=admin \
		--admin_email=email@raccoon.ag
		

	wp option update siteurl http://localhost	
	
	wp rewrite structure '/%postname%/'
	
	wp theme activate raccoon		
	
	wp plugin uninstall akismet hello
	wp plugin install wordpress-importer 
	wp plugin update --all
	wp plugin activate --all 
	
	wp import ./wp-content/raccoon_boilerplate.xml  --authors=create

	
	


		

