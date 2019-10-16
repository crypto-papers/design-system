'use strict';

const rules = [
  './rules/base/bestPractices',
  './rules/base/errors',
  './rules/base/es6',
  './rules/base/nodeCommon',
  './rules/base/strict',
  './rules/base/stylistic',
  './rules/base/variables',
  './rules/import/index.js',
  './rules/prettier/prettier',
].map(require.resolve);

const thirdPartyPackages = ['eslint-config-prettier'];

module.exports = {
  env: {
    browser: true,
  },
  extends: rules.concat(thirdPartyPackages),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
