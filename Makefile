.PHONY: lint lint-fix format test start

# Проверка линтинга
lint:
npx eslint .

# Автоматическое исправление ошибок линтинга
lint-fix:
npx eslint --fix .

# Форматирование кода с Prettier
format:
npx prettier --write .

# Проверка форматирования
format-check:
npx prettier --check .

# Запуск приложения
start:
node index.js

# Тестирование (заглушка)
test:
echo "No tests yet"
