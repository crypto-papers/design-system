'use strict';

/**
 * Overrides the import settings in the base config with TS specific settings.
 *
 */

module.exports = {
  rules: {
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
    'import/named': 'off', // TypeScript compilation ensures that named imports exist in the referenced module
    'import/no-unused-modules': 'off', // Disabled to avoid errors in VScode
  },
};
