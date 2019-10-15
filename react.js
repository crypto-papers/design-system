'use strict';

const reactVersion = '16.10.2';

const rules = [
  './rules/react/a11y',
  './rules/react/base',
  './rules/react/hooks',
  './rules/react/jsx',
].map(require.resolve);

const thirdPartyPackages = ['eslint-config-prettier/react'];

module.exports = {
  extends: rules.concat(thirdPartyPackages),
  rules: {},
  settings: {
    react: {
      version: reactVersion,
    },
  },
};
