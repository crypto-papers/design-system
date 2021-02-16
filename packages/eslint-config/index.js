'use strict';

/**
 * Entry point for the base linting configuration.
 *
 */

const rules = [
  './rules/deprecated/deprecated',
  './rules/base/bestPractices',
  './rules/base/errors',
  './rules/base/es6',
  './rules/base/strict',
  './rules/base/stylistic',
  './rules/base/variables',
  './rules/import/import',
  './rules/jest/jest',
  './rules/prettier/core',
  './rules/prettier/configurable',
].map(require.resolve);

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    serviceworker: true,
  },
  extends: rules,
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
    },
    ecmaVersion: 2021,
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
