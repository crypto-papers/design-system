'use strict';
/**
 * Rules dealing with features introduced in ES2015 or greater.
 *
 */

module.exports = {
  env: {
    es6: true,
  },
  rules: {
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true,
      },
    ],
    'no-new-symbol': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false,
      },
    ],
    'no-var': 'warn',
    'object-shorthand': [
      'error',
      'always',
      {
        avoidExplicitReturnArrows: true,
        avoidQuotes: true,
        ignoreConstructors: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: true,
          object: false,
        },
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'sort-imports': 'off', // Rule not refined enough for our liking
    /*
     * Here is the closest approximation of what we'd like to achieve with the available options:
     *
     * 'sort-imports': [
     *   'error',
     *   {
     *     ignoreCase: false,
     *     ignoreDeclarationSort: true,
     *     ignoreMemberSort: false,
     *     memberSyntaxSortOrder: ['single', 'multiple', 'all', 'none'],
     *   },
     * ],
     *
     */
    'symbol-description': 'error',
  },
};
