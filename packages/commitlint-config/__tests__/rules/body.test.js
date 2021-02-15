const bodyRuleset = require('../../rules/body');

describe('Ruleset for commit bodies', () => {
  it('loads without error', () => {
    expect(() => bodyRuleset).not.toThrow();
  });

  it('contains a ruleset', () => {
    const { rules } = bodyRuleset;

    expect(rules).toBeDefined();
    expect(typeof rules).toStrictEqual('object');
    expect(Object.keys(rules)).toHaveLength(4);
  });
});
