const footerRuleset = require('../../rules/footer');

describe('Ruleset for commit footers', () => {
  it('loads without error', () => {
    expect(() => footerRuleset).not.toThrow();
  });

  it('contains a ruleset', () => {
    const { rules } = footerRuleset;

    expect(rules).toBeDefined();
    expect(typeof rules).toEqual('object');
    expect(Object.keys(rules)).toHaveLength(4);
  });
});
