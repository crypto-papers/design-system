module.exports = {
  extends: ['@cryptopapers/eslint-config', '@cryptopapers/eslint-config/react'],
  ignorePatterns: ['node_modules/', 'packages/component-library/lib/*'],
  overrides: [
    {
      extends: [
        '@cryptopapers/eslint-config',
        '@cryptopapers/eslint-config/react',
        '@cryptopapers/eslint-config/typescript',
      ],
      files: ['**/*.ts', '**/*.tsx'],
    },
  ],
};
