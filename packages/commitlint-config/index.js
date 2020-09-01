const rules = [
  './rules/body',
  './rules/footer',
  './rules/header',
  './rules/misc',
  './rules/scope',
  './rules/subject',
  './rules/type',
].map(require.resolve);

module.exports = {
  rules,
};
