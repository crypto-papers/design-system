'use strict';
/**
 * Overrides the import settings in the base config with TS specific settings.
 *
 */

module.exports = {
  rules: {
    'import/named': 'off', // TypeScript compilation ensures that named imports exist in the referenced module
  },
  settings: {
    'import/extensions': [
      'error',
      'always',
      {
        'd.ts': 'never',
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
      },
    ],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
  },
};
