const length = require('../variables/length');
const types = require('../variables/types');

describe('Length variable object', () => {
  it('contains long and short properties, which are numbers', () => {
    const { long, short } = length;

    expect(long).toBeDefined();
    expect(typeof long).toEqual('number');

    expect(short).toBeDefined();
    expect(typeof short).toEqual('number');
  });
});

describe('The types enum', () => {
  it('is an array of strings with the expected number of options', () => {
    const { defaultTypes } = types;

    expect(Array.isArray(defaultTypes)).toEqual(true);
    expect(defaultTypes).toHaveLength(12);
    defaultTypes.forEach(type => {
      expect(typeof type).toEqual('string');
    });
  });
});
