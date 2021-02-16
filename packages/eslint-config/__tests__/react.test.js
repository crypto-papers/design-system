const reactConfig = require('../react');
const a11yRuleset = require('../rules/react/a11y');
const baseRuleset = require('../rules/react/base');
const deprecatedRuleset = require('../rules/deprecated/react');
const hooksRuleset = require('../rules/react/hooks');
const jsxRuleset = require('../rules/react/jsx');

describe('React config', () => {
  it('loads without error', () => {
    expect(typeof reactConfig).toStrictEqual('object');

    expect(() => reactConfig).not.toThrow();
  });

  it('includes the base, import, prettier, jest, and deprecated rulesets', () => {
    const extension = reactConfig.extends;

    expect(extension).toHaveLength(6);

    expect(extension[0].endsWith('rules/deprecated/react.js')).toStrictEqual(true);
    expect(extension[1].endsWith('rules/react/a11y.js')).toStrictEqual(true);
    expect(extension[2].endsWith('rules/react/base.js')).toStrictEqual(true);
    expect(extension[3].endsWith('rules/react/hooks.js')).toStrictEqual(true);
    expect(extension[4].endsWith('rules/react/jsx.js')).toStrictEqual(true);
    expect(extension[5].endsWith('rules/prettier/react.js')).toStrictEqual(true);
  });

  it('sets the parser options', () => {
    const { ecmaFeatures } = reactConfig.parserOptions;

    expect(ecmaFeatures.jsx).toStrictEqual(true);
  });

  it('loads the React ESLint plugin', () => {
    const { plugins } = reactConfig;

    expect(plugins).toHaveLength(1);
    expect(plugins).toContain('eslint-plugin-react');
  });

  it("detects the user's version of React", () => {
    const { react: reactSettings } = reactConfig.settings;

    expect(reactSettings).toBeDefined();
    expect(reactSettings.version).toStrictEqual('detect');
  });
});

describe('React accessibility ruleset', () => {
  it('loads without error', () => {
    expect(() => a11yRuleset).not.toThrow();
  });

  it('loads the React JSX accessibility ESLint plugin', () => {
    const { plugins } = a11yRuleset;

    expect(plugins).toHaveLength(1);
    expect(plugins).toContain('eslint-plugin-jsx-a11y');
  });
});

describe('React base ruleset', () => {
  it('loads without error', () => {
    expect(() => baseRuleset).not.toThrow();
  });
});

describe('Deprecated React ruleset', () => {
  it('loads without error', () => {
    expect(() => deprecatedRuleset).not.toThrow();
  });
});

describe('React hooks ruleset', () => {
  it('loads without error', () => {
    expect(() => hooksRuleset).not.toThrow();
  });

  it('loads the React hooks ESLint plugin', () => {
    const { plugins } = hooksRuleset;

    expect(plugins).toHaveLength(1);
    expect(plugins).toContain('eslint-plugin-react-hooks');
  });
});

describe('React JSX ruleset', () => {
  it('loads without error', () => {
    expect(() => jsxRuleset).not.toThrow();
  });
});
