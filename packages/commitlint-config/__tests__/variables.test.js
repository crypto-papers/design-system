const lineLength = require('../variables/length');
const types = require('../variables/types');

describe('Length variable object', () => {
  it('contains long and short properties, which are numbers', () => {
    const { long, short } = lineLength;

    expect(long).toBeDefined();
    expect(typeof long).toStrictEqual('number');

    expect(short).toBeDefined();
    expect(typeof short).toStrictEqual('number');
  });
});

describe('The types enum', () => {
  it('is an array of strings with the expected number of options', () => {
    const { defaultTypes } = types;

    expect(Array.isArray(defaultTypes)).toStrictEqual(true);
    expect(defaultTypes).toHaveLength(12);
    defaultTypes.forEach(type => {
      expect(typeof type).toStrictEqual('string');
    });
  });
});
