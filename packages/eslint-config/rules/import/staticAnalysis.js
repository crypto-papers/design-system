'use strict';

/**
 * Static analysis.
 *
 */

module.exports = {
  rules: {
    'import/default': 'error',
    'import/named': 'error',
    'import/namespace': 'warn',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unresolved': [
      'error',
      {
        amd: true,
        commonjs: true,
      },
    ],
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/no-webpack-loader-syntax': 'warn',
  },
};
