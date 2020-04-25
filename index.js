'use strict';
/**
 * Entrypoint for the base linting configuration.
 *
 */

const rules = [
  './rules/deprecated/deprecated',
  './rules/base/bestPractices',
  './rules/base/errors',
  './rules/base/es6',
  './rules/base/nodeCommon',
  './rules/base/strict',
  './rules/base/stylistic',
  './rules/base/variables',
  './rules/import/import',
  './rules/prettier/core',
  './rules/prettier/configurable',
].map(require.resolve);

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
