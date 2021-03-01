module.exports = {
  extends: ['@cryptopapers/commitlint-config'],
  rules: {
    'scope-enum': [2, 'always', ['changelog', 'commitlint', 'components', 'eslint', 'prettier']],
  },
};
