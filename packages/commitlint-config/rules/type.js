const types = require('../variables/types');

module.exports = {
  rules: {
    'type-case': [2, 'always', 'start-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types.defaultTypes],
    'type-max-length': [0],
    'type-min-length': [0],
  },
};
