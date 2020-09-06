# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/crypto-papers/eslint-config/compare/v1.0.0...HEAD)

_This sections lists changes committed to master since most recent release_

### Added:

- New rules from ESLint v7.0.0 release, namely:
  - `default-case-last`
  - `no-useless-backreference`
  - `no-restricted-exports`
- Missing rules from ESLint v6.7.0 release, specifically:
  - `grouped-accessor-pairs`
  - `no-constructor-return`
  - `no-dupe-else-if`
  - `no-setter-return`
  - `prefer-exponentiation-operator`
- Environment support for `node` and `serviceworkers` in the default config

### Changed:

- Updated dependencies, including ESLint to v7.0.0
- Upgrade ECMAVersion to 2020 and enable implied strict mode
- Set `react/prop-types` to `off` in TypeScript overrides file, previously set to `error`
- Deprecated the Node ESLint rules, as they are have been supplanted with eslint-plugin-node
- Move `id-blacklist` ESLint rule to the deprecated list
- Move from package from it's own repository into the CryptoPapers Design System monorepo
- Run tests using Jest from the monorepo root

### Fixed:

- Append `jest/` prefix to all rules in the Jest ruleset
- Use imported rules to extend the default config
- Remove incorrect options object from `@typescript-eslint/strict-boolean-expressions` rule

## [v1.0.1](https://github.com/crypto-papers/eslint-config/compare/v1.0.0...v1.0.1) - 2020-04-25

### Changed:

- Corrected typo in readme that switched the React and TypeScript dependencies
- Set NPM access to be public by default

## [v1.0.0](https://github.com/crypto-papers/eslint-config/compare/v0.1.0...v1.0.0) - 2020-04-25

### Added:

- TypeScript support:
  - Add TypeScript ESLint plugin and ruleset
  - Update imports to resolve TypeScript files and use @typescript-eslint's parser
  - Added `.ts` and `.tsx` to the `react/jsx-filename-extension` list
  - Set `import/no-namespace` to off as \* imports are at times needed in typescript
  - Add ESLint base rule overrides for TypeScript files
- Linting rules for Jest testing suites as part of base config
- Initial unit tests
- Test coverage reporting

### Changed:

- Adjusted several default rules:
  - Disabled `no-magic-numbers`
  - Corrected `import/no-unassigned-import` to allow for unnamed CSS imports
  - Fixed typo in module exports for react hooks rules
- Moved JSX `ecmaFeatures` listing to React config and changed React version from fixed number to `detect`
- Disabled the `sort-imports` rule as controls are not fine-grained enough, causing more problems than it solved
- Explicitly disable deprecated rules
- Switch from eslint-config-prettier to customized ruleset that matches Prettier's settings
- Split the dependencies to be installed by users into peerDependencies for those absolutely necessary and optionalDependencies for those required by optional sub-packages
- Update readme to document configuring for TypeScript support and installing peer dependencies

## [v0.1.0](https://github.com/crypto-papers/eslint-config/compare/v0.0.1...v0.1.0) - 2019-10-15

### Added:

- React, React Hooks, and JSX A11y rule definitions
- Import rule definitions
- List of ESLint React plugin rules disabled by Prettier
- A changelog and readme

## [v0.0.1](https://github.com/crypto-papers/eslint-config/releases/tag/v0.0.1) - 2019-10-13 [Initial Release]

### Added:

- Base ESLint rule definitions
- Seamless Prettier integration
- React-related ESLint plugins (jsx-a11y, react, and react-hooks) listed as dependencies
- List of ESLint rules disabled by Prettier
