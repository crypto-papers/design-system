const length = require('../variables/length');

module.exports = {
  rules: {
    'header-case': [2, 'always', 'sentence-case'],
    'header-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', length.short],
    'header-min-length': [0],
  },
};
