'use strict';

/**
 * The following rules address certain ESLint rules that do not support TypeScript syntax
 * These rules provide the same functionality, but also supports TypeScript.
 *
 * The following rules would typically be included in the section
 * are instead configured in `rules/prettier/typescript`:
 *   - @typescript-eslint/brace-style
 *   - @typescript-eslint/comma-dangle
 *   - @typescript-eslint/comma-spacing
 *   - @typescript-eslint/func-call-spacing
 *   - @typescript-eslint/indent
 *   - @typescript-eslint/keyword-spacing
 *   - @typescript-eslint/member-delimiter-style
 *   - @typescript-eslint/no-extra-parens
 *   - @typescript-eslint/no-extra-semi
 *   - @typescript-eslint/object-curly-spacing
 *   - @typescript-eslint/quotes
 *   - @typescript-eslint/semi
 *   - @typescript-eslint/space-before-function-paren
 *   - @typescript-eslint/space-infix-ops
 *
 * The rules @typescript-eslint/no-unused-vars & @typescript-eslint/no-use-before-define apparently
 * have some issues with the scope analyzer. Fully described in the following issue:
 * https://github.com/typescript-eslint/typescript-eslint/issues/1856
 *
 */

module.exports = {
  rules: {
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/dot-notation': ['error'],
    '@typescript-eslint/init-declarations': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterOverload: true,
      },
    ],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-duplicate-imports': [
      'error',
      {
        includeExports: true,
      },
    ],
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'constructors'],
      },
    ],
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
        ignoreFunctionTypeParameterNameValueShadow: true,
        ignoreTypeValueShadow: true,
      },
    ],
    '@typescript-eslint/no-throw-literal': 'error',
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
