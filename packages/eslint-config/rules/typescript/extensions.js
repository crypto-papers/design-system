'use strict';
/**
 * The following rules address certain ESLint rules that do not support TypeScript syntax
 * These rules provide the same functionality, but also supports TypeScript.
 *
 * The following rules would typically be included in the section
 * are instead configured in `rules/prettier/typescript`:
 *   - @typescript-eslint/brace-style
 *   - @typescript-eslint/comma-spacing
 *   - @typescript-eslint/func-call-spacing
 *   - @typescript-eslint/indent
 *   - @typescript-eslint/keyword-spacing
 *   - @typescript-eslint/no-extra-parens
 *   - @typescript-eslint/no-extra-semi
 *   - @typescript-eslint/quotes
 *   - @typescript-eslint/semi
 *   - @typescript-eslint/space-before-function-paren
 *
 * The rules @typescript-eslint/no-unused-vars and @typescript-eslint/no-use-before-define apparently
 * have some issues with the scope analyzer. Fully described in the following issue:
 * https://github.com/typescript-eslint/typescript-eslint/issues/1856
 *
 */

module.exports = {
  rules: {
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/init-declarations': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'constructors'],
      },
    ],
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        caughtErrors: 'all',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ], // RULE #1856
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        classes: true,
        functions: true,
        variables: true,
      },
    ], // RULE #1856
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/return-await': ['error', 'always'],
  },
};
