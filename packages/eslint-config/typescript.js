'use strict';

/**
 * Entry point for the TypeScript linting configuration.
 *
 */

const rules = [
  './rules/typescript/overrides',
  './rules/typescript/import',
  './rules/typescript/typescript',
  './rules/typescript/extensions',
  './rules/prettier/typescript',
].map(require.resolve);

module.exports = {
  extends: rules,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  settings: {
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.d.ts', '.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
