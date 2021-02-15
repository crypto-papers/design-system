const subjectRuleset = require('../../rules/subject');

describe('Ruleset for commit subjects', () => {
  it('loads without error', () => {
    expect(() => subjectRuleset).not.toThrow();
  });

  it('contains a ruleset', () => {
    const { rules } = subjectRuleset;

    expect(rules).toBeDefined();
    expect(typeof rules).toStrictEqual('object');
    expect(Object.keys(rules)).toHaveLength(5);
  });
});
