const headerRuleset = require('../../rules/header');

describe('Ruleset for commit headers', () => {
  it('loads without error', () => {
    expect(() => headerRuleset).not.toThrow();
  });

  it('contains a ruleset', () => {
    const { rules } = headerRuleset;

    expect(rules).toBeDefined();
    expect(typeof rules).toEqual('object');
    expect(Object.keys(rules)).toHaveLength(4);
  });
});
