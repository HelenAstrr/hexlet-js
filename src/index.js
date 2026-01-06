// Импортируем нужные функции из lodash оптимальным способом
const get = require('lodash/get');
const set = require('lodash/set');

// Основная логика приложения
function main() {
  const user = {
    name: 'John',
    age: 30,
    skills: ['js', 'node', 'react'],
  };

  // Пример использования lodash функций
  const userName = get(user, 'name', 'Unknown');
  console.log('User name (via lodash.get):', userName);

  // Добавляем новое свойство через lodash.set
  set(user, 'location.city', 'New York');
  console.log('Updated user:', user);

  function greet(u) {
    console.log(
      'Hello, ' + u.name + '! You have ' + u.skills.length + ' skills'
    );
  }

  greet(user);

  return user;
}

// Экспортируем функцию для использования в других модулях
module.exports = { main };
