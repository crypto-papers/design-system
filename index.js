'use strict';

const rules = [
  './rules/bestPractices',
  './rules/errors',
  './rules/es6',
  './rules/nodeCommon',
  './rules/strict',
  './rules/stylistic',
  './rules/variables',
  './rules/prettier',
].map(require.resolve);

const thirdPartyPackages = ['eslint-config-prettier'];

module.exports = {
  extends: rules.concat(thirdPartyPackages),
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
