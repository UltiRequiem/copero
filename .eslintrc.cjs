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
    'import/extensions': ['error', 'always', { ignorePackages: true }],
  },
};
