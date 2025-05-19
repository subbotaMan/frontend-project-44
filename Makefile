# Makefile

install: # Установка зависимостей
	npm ci
	
brain-games: # Запуск игры
	node bin/brain-games.js

brain-even: # Проверка на чётность
	node bin/games/brain-even.js

brain-calc: # Проверка результат мат. операции
	node bin/games/brain-calc.js

brain-gcd: # Поиск общего наибольшего делителя
	node bin/games/brain-gcd.js

brain-progression: # Математическая прогрессия 
	node bin/games/brain-progression.js		

brain-prime: # Обнаружение простого числа 
	node bin/games/brain-prime.js	

publish: # Публикация на npm
	npm publish --dry-run

lint: # Проверка на ошибки
	npx eslint . 

