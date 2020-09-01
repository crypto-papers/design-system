const length = require('../variables/length');

module.exports = {
  rules: {
    'footer-leading-blank': [2, 'always'],
    'footer-max-length': [2, 'always', length.short],
    'footer-max-line-length': [2, 'always', length.short],
    'footer-min-length': [0],
  },
};
