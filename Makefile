# Makefile

install: # Установка зависимостей
	npm ci
	
brain-games: # Запуск игры
	node bin/brain-games.js

publish: # Публикация на npm
	npm publish --dry-run

lint: # Проверка на ошибки
	npx eslint . --fix
