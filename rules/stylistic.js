'use strict';

module.exports = {
  rules: {
    'camelcase': [
      'error',
      {
        ignoreDestructuring: false,
        properties: 'always',
      },
    ],
    'capitalized-comments': [
      'error',
      'always',
      {
        ignoreConsecutiveComments: true,
        ignoreInlineComments: true,
        ignorePattern: 'pragma|ignored',
      },
    ],
    'consistent-this': ['error', 'self'],
    'func-name-matching': [
      'error',
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: false,
      },
    ],
    'func-names': [
      'warn',
      'always',
      {
        generators: 'always',
      },
    ],
    'func-style': ['warn', 'expression'],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'line-comment-position': 'off',
    'lines-between-class-members': ['error', 'always'],
    'max-depth': 'off',
    'max-lines': [
      'warn',
      {
        max: 800,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    'multiline-comment-style': 'off',
    'new-cap': [
      'error',
      {
        capIsNew: true,
        newIsCap: true,
        properties: true,
      },
    ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: true,
      },
    ],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive',
      },
      {
        blankLine: 'always',
        prev: ['cjs-import', 'const', 'function', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'any',
        prev: ['cjs-import'],
        next: ['cjs-import'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'prefer-object-spread': 'error',
    'sort-keys': [
      'warn',
      'asc',
      {
        caseSensitive: false,
        minKeys: 2,
        natural: true,
      },
    ],
    'sort-vars': 'off',
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: ['-', '+', '*'],
        markers: [':', '::'], // support for Flow comment types
        block: {
          balanced: true,
        },
      },
    ],
  },
};
