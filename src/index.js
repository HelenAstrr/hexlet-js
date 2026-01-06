// Импортируем нужные функции из lodash оптимальным способом
import get from 'lodash/get.js';
import set from 'lodash/set.js';

// Основная логика приложения
export function main () {
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

  function greet (u) {
    console.log(
      'Hello, ' + u.name + '! You have ' + u.skills.length + ' skills'
    );
  }

  greet(user);

  return user;
}
