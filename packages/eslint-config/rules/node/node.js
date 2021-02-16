'use strict';

/**
 * Entry point for Node.js linting configuration.
 *
 */

const rules = ['./bestPractices', './errors', './stylistic'].map(require.resolve);

module.exports = {
  extends: rules,
  plugins: ['eslint-plugin-node'],
};
