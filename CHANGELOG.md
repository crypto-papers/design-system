# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/crypto-papers/eslint-config/compare/0.1.0...HEAD)

### Added:

- Initial unit tests
- Test coverage reporting

### Changed:

- Adjusted several default rules:
  - Disabled `no-magic-numbers`
  - Corrected `import/no-unassigned-import` to allow for unnamed CSS imports
  - Fixed typo in module exports for react hooks rules
- Moved JSX `ecmaFeatures` listing to React config and changed React version from fixed number to `detect`
- Disabled the `sort-imports` rule as controls are not fine-grained enough, causing more problems than it solved
- Add TypeScript support:
  - Add TypeScript ESLint plugin and ruleset
  - Update imports to resolve TypeScript files and use @typescript-eslint's parser
  - Added `.ts` and `.tsx` to the `react/jsx-filename-extension` list
  - Set `import/no-namespace` to off as \* imports are at times needed in typescript
  - Add ESLint base rule overrides for TypeScript files
- Explicitly disable deprecated rules
- Switch from eslint-config-prettier to customized ruleset that matches Prettier's settings
- Split the dependencies to be installed by users into peerDependencies for those absolutely necessary and optionalDependencies for those required by optional sub-packages

## [0.1.0](https://github.com/crypto-papers/eslint-config/compare/0.0.1...0.1.0) - 2019-10-15

### Added:

- React, React Hooks, and JSX A11y rule definitions
- Import rule definitions
- List of ESLint React plugin rules disabled by Prettier
- A changelog and readme

## [0.0.1](https://github.com/crypto-papers/eslint-config/releases/tag/0.0.1) - 2019-10-13 [Initial Release]

### Added:

- Base ESLint rule definitions
- Seamless Prettier integration
- React-related ESLint plugins (jsx-a11y, react, and react-hooks) listed as dependencies
- List of ESLint rules disabled by Prettier
