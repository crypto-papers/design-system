'use strict';

const reactVersion = '16.10.2';

const rules = ['./rules/react/base', './rules/react/jsx'].map(require.resolve);

const thirdPartyPackages = ['eslint-config-prettier/react'];

module.exports = {
  extends: rules.concat(thirdPartyPackages),
  plugins: ['eslint-plugin-jsx-a11y', 'eslint-plugin-react', 'eslint-plugin-react-hooks'],
  rules: {},
  settings: {
    react: {
      version: reactVersion,
    },
  },
};
