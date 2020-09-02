const body = require('./rules/body');
const footer = require('./rules/footer');
const header = require('./rules/header');
const misc = require('./rules/misc');
const scope = require('./rules/scope');
const subject = require('./rules/subject');
const type = require('./rules/type');

const rules = {
  ...body.rules,
  ...footer.rules,
  ...header.rules,
  ...misc.rules,
  ...scope.rules,
  ...subject.rules,
  ...type.rules,
};

module.exports = {
  rules,
};
