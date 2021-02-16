'use strict';

/**
 * Entry point for the React linting configuration.
 *
 */

const rules = [
  './rules/deprecated/react.js',
  './rules/react/a11y',
  './rules/react/base',
  './rules/react/hooks',
  './rules/react/jsx',
  './rules/prettier/react',
].map(require.resolve);

module.exports = {
  extends: rules,
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
