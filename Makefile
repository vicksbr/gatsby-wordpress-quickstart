start:
	docker-compose up -d --build

healthcheck:
	docker-compose run --rm healthcheck

down:
	docker-compose down

install: start healthcheck

configure:
	docker-compose -f docker-compose.yml -f wp-auto-build.yml run --rm raccoon-wp-boilerplate

autoinstall: start
	docker-compose -f docker-compose.yml -f wp-auto-build.yml run --rm raccoon-wp-boilerplate

clean: down
	@echo "💥 Removing related folders/files..."
	@rm -rf  wordpress-db/* wordpress/*

reset: clean