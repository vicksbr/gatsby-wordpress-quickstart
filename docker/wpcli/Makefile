install: configure

configure:
	wp core install \
		--path=/var/www/html \
		--url=localhost \
		--title="Raccon Boilerplate" \
		--admin_user=admin \
		--admin_password=admin \
		--admin_email=email@raccoon.ag
		
	wp rewrite structure '/%postname%/'
	wp theme activate raccoon		
	wp plugin activate --all 
	
	

	
	


		

