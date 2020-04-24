'use strict';
/**
 * Entrypoint for the TypeScript linting configuration.
 *
 */

const { overrides } = require('./rules/typescript/overrides');

const rules = [
  './rules/typescript/import',
  './rules/typescript/typescript',
  './rules/typescript/extenstions',
  './rules/prettier/typescript',
].map(require.resolve);

module.exports = {
  extends: rules,
  overrides,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
};
