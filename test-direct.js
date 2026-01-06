// Тест прямого импорта из src/index.js
const { main } = require('./src/index.js');
console.log('=== Testing direct import ===');
const result = main();
console.log('Direct import result:', result);
