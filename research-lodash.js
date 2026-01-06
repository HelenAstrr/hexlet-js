const path = require('path');
const fs = require('fs');

console.log('=== Lodash import research ===\n');

// 1. Весь lodash
const lodashPath = require.resolve('lodash');
console.log('Full lodash path:', lodashPath);
console.log('File size:', fs.statSync(lodashPath).size, 'bytes\n');

// 2. Отдельная функция get
const getPath = require.resolve('lodash/get');
console.log('lodash/get path:', getPath);
console.log('File size:', fs.statSync(getPath).size, 'bytes\n');

// 3. Содержимое основного файла lodash (первые строки)
const lodashContent = fs.readFileSync(lodashPath, 'utf8');
const lines = lodashContent.split('\n').slice(0, 10);
console.log('First 10 lines of lodash.js:');
lines.forEach((line, i) => console.log(`${i + 1}: ${line}`));
console.log('...\n');

// 4. Сравним размеры
console.log('=== Size comparison ===');
console.log(
  'Full lodash:',
  Math.round(fs.statSync(lodashPath).size / 1024) + 'KB'
);
console.log(
  'Just get function:',
  Math.round(fs.statSync(getPath).size / 1024) + 'KB'
);

// 5. Какие файлы реально импортируются
console.log('\n=== Real imported files ===');
console.log('require("lodash") imports:', path.basename(lodashPath));
console.log('require("lodash/get") imports:', path.basename(getPath));
