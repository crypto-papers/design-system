const scopeRuleset = require('../../rules/scope');

describe('Ruleset for commit scopes', () => {
  it('loads without error', () => {
    expect(() => scopeRuleset).not.toThrow();
  });

  it('contains a ruleset', () => {
    const { rules } = scopeRuleset;

    expect(rules).toBeDefined();
    expect(typeof rules).toEqual('object');
    expect(Object.keys(rules)).toHaveLength(4);
  });
});
