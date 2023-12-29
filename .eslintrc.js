module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    indent: ['off', 4],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],

    'linebreak-style': ['error', 'unix'],
    'prefer-const': [0, { destructuring: 'all' }],

    'no-unused-expressions': 'error',
    'no-unused-vars': 'error',
    'no-debugger': 'error',
    'no-console': 'warn',
    'ban-ts-ignore': 0,

    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
  },
};
