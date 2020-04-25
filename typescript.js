'use strict';
/**
 * Entrypoint for the TypeScript linting configuration.
 *
 */

const { overrides } = require('./rules/typescript/overrides');

const rules = [
  './rules/typescript/import',
  './rules/typescript/typescript',
  './rules/typescript/extensions',
  './rules/prettier/typescript',
].map(require.resolve);

module.exports = {
  extends: rules,
  overrides,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.d.ts', '.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
