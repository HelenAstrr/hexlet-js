import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { statSync, readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('=== Lodash import research ===\n');

// 1. Весь lodash
const lodashPath = join(__dirname, 'node_modules/lodash/lodash.js');
console.log('Full lodash path:', lodashPath);
console.log('File size:', statSync(lodashPath).size, 'bytes\n');

// 2. Отдельная функция get
const getPath = join(__dirname, 'node_modules/lodash/get.js');
console.log('lodash/get path:', getPath);
console.log('File size:', statSync(getPath).size, 'bytes\n');

// 3. Содержимое основного файла lodash (первые строки)
const lodashContent = readFileSync(lodashPath, 'utf8');
const lines = lodashContent.split('\n').slice(0, 10);
console.log('First 10 lines of lodash.js:');
lines.forEach((line, i) => console.log(`${i + 1}: ${line}`));
console.log('...\n');

// 4. Сравним размеры
console.log('=== Size comparison ===');
console.log(
  'Full lodash:',
  Math.round(statSync(lodashPath).size / 1024) + 'KB'
);
console.log(
  'Just get function:',
  Math.round(statSync(getPath).size / 1024) + 'KB'
);

// 5. Какие файлы реально импортируются
console.log('\n=== Real imported files ===');
console.log('import from "lodash" imports:', lodashPath.split('/').pop());
console.log('import from "lodash/get" imports:', getPath.split('/').pop());
