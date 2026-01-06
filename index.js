// Импортируем функцию из нашего модуля
import { main } from './src/index.js';

// Вызываем основную логику приложения
console.log('=== Starting application ===');
const result = main();
console.log('=== Application finished ===');
console.log('Result:', result);
