const defaultConfig = require('../index');

describe('Default config', () => {
  it('loads without error', () => {
    expect(() => defaultConfig).not.toThrow();
  });

  it('includes the commitlint rulesets', () => {
    const rules = defaultConfig.rules;

    expect(typeof rules).toEqual('object');
    expect(Object.keys(rules)).toHaveLength(28);
  });
});
