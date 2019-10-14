'use strict';

const confusingGlobals = require('./confusingGlobals');

module.exports = {
  rules: {
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error'].concat(confusingGlobals),
    'no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
      },
    ],
    'no-shadow-restricted-names': 'error',
    'no-undef': [
      'error',
      {
        typeof: false,
      },
    ],
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        caughtErrors: 'all',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: true,
        variables: true,
      },
    ],
  },
};
