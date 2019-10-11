'use strict';

module.exports = {
  // The following address stylistic rules that Prettier leaves to somewhat open the user's discretion.
  // For more details see: https://github.com/prettier/eslint-config-prettier#special-rules
  rules: {
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: true,
      },
    ],
    'curly': ['error', 'all'],
    'lines-around-comment': [
      'warn',
      {
        afterBlockComment: false,
        afterLineComment: false,
        allowBlockEnd: true,
        allowBlockStart: true,
        allowClassStart: true,
        beforeBlockComment: true,
        beforeLineComment: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['==', '!=', '===', '!=='],
          ['&&', '||'],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-tabs': 'error',
    'no-unexpected-multiline': 'error',
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
        allowUnboundThis: true,
      },
    ],
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
  },
};
