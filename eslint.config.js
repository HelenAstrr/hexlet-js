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

      // Правила стиля от @stylistic - СОГЛАСОВАННЫЕ С PRETTIER
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/comma-dangle': 'off', // ВЫКЛЮЧАЕМ - пусть Prettier управляет этим
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/keyword-spacing': 'error',
      '@stylistic/no-trailing-spaces': 'error',

      // Дополнительные правила
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
    },
  },
];
