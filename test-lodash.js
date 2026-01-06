const { get, set, isEmpty } = require('lodash');
console.log('get function:', typeof get);
console.log('Path to lodash:', require.resolve('lodash'));
console.log('Path to lodash/get:', require.resolve('lodash/get'));
