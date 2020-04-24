'use strict';
/**
 * Entrypoint for the React linting configuration.
 *
 */

const rules = [
  './rules/react/a11y',
  './rules/react/base',
  './rules/react/hooks',
  './rules/react/jsx',
].map(require.resolve);

const thirdPartyPackages = ['eslint-config-prettier/react'];

module.exports = {
  extends: rules.concat(thirdPartyPackages),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['eslint-plugin-react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
