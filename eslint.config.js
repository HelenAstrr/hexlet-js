import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // Рекомендуемые правила ESLint
      ...js.configs.recommended.rules,

      // Базовые правила стиля
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/indent': ['error', 2],

      // ВЫКЛЮЧАЕМ правила, конфликтующие с Prettier
      '@stylistic/comma-dangle': 'off',
      '@stylistic/space-before-function-paren': 'off', // ОТКЛЮЧАЕМ

      // Оставляем некритичные правила
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/keyword-spacing': 'error',
      '@stylistic/no-trailing-spaces': 'error',

      // Дополнительные правила
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
    },
  },
];
