module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'next/core-web-vitals',
    'plugin:unicorn/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'unicorn/prevent-abbreviations': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
