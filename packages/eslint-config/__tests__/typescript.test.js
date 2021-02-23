const tsConfig = require('../typescript');

describe('TypeScript config', () => {
  it('loads without error', () => {
    expect(typeof tsConfig).toStrictEqual('object');

    expect(() => tsConfig).not.toThrow();
  });

  it('includes the base, import, prettier, jest, and deprecated rulesets', () => {
    const extension = tsConfig.extends;

    expect(extension).toHaveLength(5);

    expect(extension[0].endsWith('rules/typescript/overrides.js')).toStrictEqual(true);
    expect(extension[1].endsWith('rules/typescript/import.js')).toStrictEqual(true);
    expect(extension[2].endsWith('rules/typescript/extensions.js')).toStrictEqual(true);
    expect(extension[3].endsWith('rules/typescript/typescript.js')).toStrictEqual(true);
    expect(extension[4].endsWith('rules/prettier/typescript.js')).toStrictEqual(true);
  });

  it('sets the parser options', () => {
    const { parser } = tsConfig;
    const { project } = tsConfig.parserOptions;

    expect(parser).toStrictEqual('@typescript-eslint/parser');
    expect(project).toStrictEqual('./tsconfig.json');
  });

  it('loads the TypeScript ESLint plugin', () => {
    const { plugins } = tsConfig;

    expect(plugins).toHaveLength(1);
    expect(plugins).toContain('@typescript-eslint/eslint-plugin');
  });
});
