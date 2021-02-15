const typeRuleset = require('../../rules/type');

describe('Ruleset for commit types', () => {
  it('loads without error', () => {
    expect(() => typeRuleset).not.toThrow();
  });

  it('contains a ruleset', () => {
    const { rules } = typeRuleset;

    expect(rules).toBeDefined();
    expect(typeof rules).toStrictEqual('object');
    expect(Object.keys(rules)).toHaveLength(5);
  });
});
