'use strict';

/**
 * These ESLint rules should be turned off for in order not to conflict with their
 * TypeScript-specific equivalents. We load them as overrides for .ts and .tsx files
 * only so that they do not act upon .js and .jsx files in mixed JS/TS projects
 *
 */

module.exports = {
  rules: {
    'default-param-last': 'off',
    'dot-notation': 'off',
    'lines-between-class-members': 'off',
    'no-array-constructor': 'off',
    'no-dupe-class-members': 'off',
    'no-duplicate-imports': 'off',
    'no-empty-function': 'off',
    'no-implied-eval': 'off',
    'no-invalid-this': 'off',
    'no-loop-func': 'off',
    'no-loss-of-precision': 'off',
    'no-magic-numbers': 'off',
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-throw-literal': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'require-await': 'off',
    'return-await': 'off',
    'react/prop-types': 'off', // eslint-disable-line sort-keys -- Keeping last since from a plugin
  },
};
