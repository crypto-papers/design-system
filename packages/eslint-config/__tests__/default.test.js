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
const prettierCoreRuleset = require('../rules/prettier/core.js');
const prettierConfigurableRuleset = require('../rules/prettier/configurable.js');

describe('Default config', () => {
  it('loads without error', () => {
    expect(typeof defaultConfig).toStrictEqual('object');

    expect(() => defaultConfig).not.toThrow();
  });

  it('includes the base, import, prettier, jest, and deprecated rulesets', () => {
    const extension = defaultConfig.extends;

    expect(extension).toHaveLength(11);

    expect(extension[0].endsWith('rules/deprecated/deprecated.js')).toStrictEqual(true);
    expect(extension[1].endsWith('rules/base/bestPractices.js')).toStrictEqual(true);
    expect(extension[2].endsWith('rules/base/errors.js')).toStrictEqual(true);
    expect(extension[3].endsWith('rules/base/es6.js')).toStrictEqual(true);
    expect(extension[4].endsWith('rules/base/strict.js')).toStrictEqual(true);
    expect(extension[5].endsWith('rules/base/stylistic.js')).toStrictEqual(true);
    expect(extension[6].endsWith('rules/base/variables.js')).toStrictEqual(true);
    expect(extension[7].endsWith('rules/import/import.js')).toStrictEqual(true);
    expect(extension[8].endsWith('rules/jest/jest.js')).toStrictEqual(true);
    expect(extension[9].endsWith('rules/prettier/core.js')).toStrictEqual(true);
    expect(extension[10].endsWith('rules/prettier/configurable.js')).toStrictEqual(true);
  });

  it('makes the commons globals available to ESLint', () => {
    const { env } = defaultConfig;

    expect(env).toBeDefined();
    expect(env.browser).toStrictEqual(true);
    expect(env.es6).toStrictEqual(true);
    expect(env.jest).toStrictEqual(true);
    expect(env.node).toStrictEqual(true);
    expect(env.serviceworker).toStrictEqual(true);
  });

  it('sets the parser options', () => {
    const { ecmaFeatures } = defaultConfig.parserOptions;
    const { ecmaVersion } = defaultConfig.parserOptions;
    const { sourceType } = defaultConfig.parserOptions;

    expect(ecmaFeatures.globalReturn).toStrictEqual(false);
    expect(ecmaFeatures.impliedStrict).toStrictEqual(true);
    expect(ecmaVersion).toStrictEqual(2021);
    expect(sourceType).toStrictEqual('module');
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

describe('Prettier ruleset', () => {
  it('loads without error', () => {
    expect(() => prettierCoreRuleset).not.toThrow();
    expect(() => prettierConfigurableRuleset).not.toThrow();
  });

  it('loads the Prettier ESLint plugin', () => {
    const { plugins } = prettierCoreRuleset;

    expect(plugins).toHaveLength(1);
    expect(plugins).toContain('eslint-plugin-prettier');
  });
});
