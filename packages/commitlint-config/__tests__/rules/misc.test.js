const miscRuleset = require('../../rules/misc');

describe('Miscellaneous rules', () => {
  it('loads without error', () => {
    expect(() => miscRuleset).not.toThrow();
  });

  it('contains a ruleset', () => {
    const { rules } = miscRuleset;

    expect(rules).toBeDefined();
    expect(typeof rules).toEqual('object');
    expect(Object.keys(rules)).toHaveLength(2);
  });
});
