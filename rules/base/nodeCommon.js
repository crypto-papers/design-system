'use strict';
/**
 * Rules for code running in Node.js or other CommonJS environment.
 *
 */

module.exports = {
  env: {
    node: true,
  },
  rules: {
    'callback-return': 'warn',
    'global-require': 'error',
    'handle-callback-err': ['error', '^.*(e|E)rr'],
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
  },
};
