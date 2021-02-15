const lineLength = require('../variables/length');

module.exports = {
  rules: {
    'header-case': [2, 'always', 'sentence-case'],
    'header-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', lineLength.short],
    'header-min-length': [0],
  },
};
