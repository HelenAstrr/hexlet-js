// Импортируем функцию из нашего модуля
const { main } = require('./src/index.js');

// Вызываем основную логику приложения
console.log('=== Starting application ===');
const result = main();
console.log('=== Application finished ===');
console.log('Result:', result);
