const defaultConfig = require('../index');

const deprecatedRuleset = require('../rules/deprecated/deprecated');
const bestPracticesRuleset = require('../rules/base/bestPractices');
const errorsRuleset = require('../rules/base/errors');
const es6Ruleset = require('../rules/base/es6');
const strictRuleset = require('../rules/base/strict');
const stylisticRuleset = require('../rules/base/stylistic');
const variablesRuleset = require('../rules/base/variables');
const importRuleset = require('../rules/import/import.js');
const nodeRuleset = require('../rules/node/node.js');

describe('Default config', () => {
  it('loads without error', () => {
    expect(typeof defaultConfig).toEqual('object');

    expect(() => defaultConfig).not.toThrow();
  });

  it('makes the commons globals available to ESLint', () => {
    const { env } = defaultConfig;

    expect(env).toBeDefined();
    expect(env.browser).toEqual(true);
    expect(env.es6).toEqual(true);
    expect(env.serviceworker).toEqual(true);
  });

  it('sets the parser options', () => {
    const { ecmaFeatures } = defaultConfig.parserOptions;
    const { ecmaVersion } = defaultConfig.parserOptions;
    const { sourceType } = defaultConfig.parserOptions;

    expect(ecmaFeatures.impliedStrict).toEqual(true);
    expect(ecmaVersion).toEqual(2020);
    expect(sourceType).toEqual('module');
  });
});

describe('Deprecates ruleset', () => {
  it('loads without error', () => {
    expect(() => deprecatedRuleset).not.toThrow();
  });
});

describe('Best practices ruleset', () => {
  it('loads without error', () => {
    expect(() => bestPracticesRuleset).not.toThrow();
  });
});

describe('Errors ruleset', () => {
  it('loads without error', () => {
    expect(() => errorsRuleset).not.toThrow();
  });
});
describe('ES6 base ruleset', () => {
  it('loads without error', () => {
    expect(() => es6Ruleset).not.toThrow();
  });
});

describe('Strict mode ruleset', () => {
  it('loads without error', () => {
    expect(() => strictRuleset).not.toThrow();
  });
});

describe('Stylistic ruleset', () => {
  it('loads without error', () => {
    expect(() => stylisticRuleset).not.toThrow();
  });
});

describe('Variables ruleset', () => {
  it('loads without error', () => {
    expect(() => variablesRuleset).not.toThrow();
  });
});

describe('Import ruleset', () => {
  it('loads without error', () => {
    expect(() => importRuleset).not.toThrow();
  });
});

describe('Node ruleset', () => {
  it('loads without error', () => {
    expect(() => nodeRuleset).not.toThrow();
  });
});
