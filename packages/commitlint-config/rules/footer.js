const lineLength = require('../variables/length');

module.exports = {
  rules: {
    'footer-leading-blank': [2, 'always'],
    'footer-max-length': [2, 'always', lineLength.short],
    'footer-max-line-length': [2, 'always', lineLength.short],
    'footer-min-length': [0],
  },
};
