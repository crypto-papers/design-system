'use strict';

module.exports = {
  extends: ['eslint-config-prettier'],
  rules: {
    // The following address stylistic rules that Prettier leaves to somewhat open the user's discretion.
    // For more details see: https://github.com/prettier/eslint-config-prettier#special-rules
    'arrow-body-style': 0,
    'curly': 0,
    'lines-around-comment': 0,
    'max-len': 0,
    'no-confusing-arrow': 0,
    'no-mixed-operators': 0,
    'no-tabs': 0,
    'no-unexpected-multiline': 0,
    'prefer-arrow-callback': 0,
    'quotes': 0,
  },
};
