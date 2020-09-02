const deprecatedRuleset = require('../../rules/deprecated');

describe('Deprecated rules', () => {
  it('loads without error', () => {
    expect(() => deprecatedRuleset).not.toThrow();
  });

  it('contains a ruleset', () => {
    const { rules } = deprecatedRuleset;

    expect(rules).toBeDefined();
    expect(typeof rules).toEqual('object');
    expect(Object.keys(rules)).toHaveLength(4);
  });
});
