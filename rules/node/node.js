'use strict';
/**
 * Entry point for Node.js linting configuration.
 *
 */

const rules = ['./bestPractices', './errors', './stylistic'].map(require.resolve);

module.exports = {
  env: {
    node: true,
  },
  extends: rules,
  plugins: ['eslint-plugin-node'],
};
