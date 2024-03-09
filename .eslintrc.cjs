module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', '@tanstack/query'],
  rules: {
    // "@tanstack/query/exhaustive-deps": "error",
    // "@tanstack/query/no-rest-destructuring": "warn",
    // "@tanstack/query/stable-query-client": "error"
    'prefer-const': 'warn',
    'no-var': 'error',
    'no-new-object': 'error',
    'object-shorthand': 'error',
    'no-array-constructor': 'error',
    'prefer-destructuring': 'warn',
    'prefer-template': 'error',
    'wrap-iife': ['error', 'any'],
    'no-loop-func': 'error',
    'prefer-rest-params': 'error',
    'no-new-func': 'error',
    'prefer-spread': 'error',
    // 'import/first': 'warn',
    'no-case-declarations': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'brace-style': 'error',
    'max-depth': ['error', 2],
    'no-unreachable': 'error',
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
