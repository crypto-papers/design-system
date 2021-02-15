const lineLength = require('../variables/length');

module.exports = {
  rules: {
    'body-leading-blank': [2, 'always'],
    'body-max-length': [0],
    'body-max-line-length': [2, 'always', lineLength.long],
    'body-min-length': [0],
  },
};
