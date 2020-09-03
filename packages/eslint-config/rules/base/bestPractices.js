'use strict';
/**
 * A set of ESLint rules related to better ways of doing things.
 *
 */

module.exports = {
  rules: {
    'accessor-pairs': [
      'warn',
      {
        enforceForClassMembers: true,
        getWithoutSet: true,
        setWithoutGet: true,
      },
    ],
    'array-callback-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    'complexity': ['warn', 15], // eslint-disable-line no-magic-numbers
    'consistent-return': 'error',
    'default-case': [
      'error',
      {
        commentPattern: '^skip\\sdefault',
      },
    ],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
      },
    ],
    'eqeqeq': ['error', 'smart'],
    'grouped-accessor-pairs': ['error', 'setBeforeGet'],
    'guard-for-in': 'error',
    'max-classes-per-file': ['error', 1],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': [
      'error',
      {
        allowElseIf: true,
      },
    ],
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'constructors'],
      },
    ],
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'warn',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': [
      'off', // Got to be annoying
      {
        detectObjects: false,
        enforceConst: true,
        ignore: [1],
        ignoreArrayIndexes: true,
      },
    ],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: [
          'acc', // Reduce accumulators
          'accumulator', // Reduce accumulators
          'e', // For e.returnvalue
          'ctx', // Koa routing
          'req', // Express requests
          'request', // Express requests
          'res', // Express responses
          'response', // Express responses
        ],
        props: true,
      },
    ],
    'no-proto': 'error',
    'no-redeclare': 'error',
    // The following list of restricted properties derived from AirBNB's base lint config
    'no-restricted-properties': [
      'error',
      {
        message: 'arguments.callee is deprecated',
        object: 'arguments',
        property: 'callee',
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'global',
        property: 'isFinite',
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'self',
        property: 'isFinite',
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'window',
        property: 'isFinite',
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'global',
        property: 'isNaN',
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'self',
        property: 'isNaN',
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'window',
        property: 'isNaN',
      },
      {
        message: 'Please use Object.defineProperty instead.',
        property: '__defineGetter__',
      },
      {
        message: 'Please use Object.defineProperty instead.',
        property: '__defineSetter__',
      },
      {
        message: 'Use the exponentiation operator (**) instead.',
        object: 'Math',
        property: 'pow',
      },
    ],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': [
      'error',
      {
        props: true,
      },
    ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
      },
    ],
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': [
      'warn',
      {
        location: 'start',
        terms: ['fixme', 'todo', 'xxx'],
      },
    ],
    'no-with': 'error',
    'prefer-named-capture-group': 'warn',
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true,
      },
    ],
    'prefer-regex-literals': 'warn',
    'radix': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'vars-on-top': 'error',
    'yoda': 'error',
  },
};
