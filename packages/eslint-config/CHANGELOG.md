# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/crypto-papers/design-system/tree/main/packages/eslint-config)

_This sections lists changes committed to master since most recent release_

## [v2.1.0](https://github.com/crypto-papers/design-system/tree/eslint-config%402.1.0/packages/eslint-config) 2021-02-23

### Added:

- TypeScript plugin rules missing from the config. Namely,
  - `@typescript-eslint/ban-tslint-comment`
  - `@typescript-eslint/consistent-indexed-object-style`
  - `@typescript-eslint/consistent-type-import`
  - `@typescript-eslint/dot-notation`
  - `@typescript-eslint/lines-between-class-members`
  - `@typescript-eslint/no-confusing-non-null-assertion`
  - `@typescript-eslint/no-confusing-void-expression`
  - `@typescript-eslint/no-duplicate-imports`
  - `@typescript-eslint/no-implicit-any-catch`
  - `@typescript-eslint/no-invalid-this`
  - `@typescript-eslint/no-invalid-void-type`
  - `@typescript-eslint/no-loop-func`
  - `@typescript-eslint/no-loss-of-precision`
  - `@typescript-eslint/no-redeclare`
  - `@typescript-eslint/no-shadow`
  - `@typescript-eslint/no-unnecessary-type-constraint`
  - `@typescript-eslint/non-nullable-type-assertion-style`
  - `@typescript-eslint/prefer-enum-initializers`
  - `@typescript-eslint/prefer-literal-enum-member`
  - `@typescript-eslint/sort-type-union-intersection-members`

### Changed:

- Set `@typescript-eslint/prefer-readonly-parameter-type` level to `warn` rather than `error`
- Move definition of `@typescript-eslint/no-implied-eval` and `@typescript-eslint/no-throw-literal` rules into the extensions file
- Explicitly disable `@typescript-eslint/object-curly-spacing` and `@typescript-eslint/space-infix-ops` as they are handled by Prettier
- Disable the following base rules in the the TypeScript config to avoid conflicts with their TS equivalents
  - `dot-notation`
  - `lines-between-class-members`
  - `no-duplicate-imports`
  - `no-implied-eval`
  - `no-invalid-this`
  - `no-loop-func`
  - `no-loss-of-precision`
  - `no-redeclare`
  - `no-shadow`
  - `no-throw-literal`

## [v2.0.1](https://github.com/crypto-papers/design-system/tree/eslint-config%402.0.1/packages/eslint-config) 2021-02-20

### Fixed:

- Correctly place the TypeScript `import/extensions` override in rules rather than settings
- Put all TypeScript settings options into the root TypeScript config file

## [v2.0.0](https://github.com/crypto-papers/design-system/tree/eslint-config%402.0.0/packages/eslint-config) - 2021-02-15

### Added:

- New rule from ESLint v7.14.0 release, namely:
  - `no-nonoctal-decimal-escape`
- New rules from ESLint v7.1.0 release, namely:
  - `no-promise-executor-return`
  - `no-unreachable-loop`
- New rule from ESLint v7.1.0 release, namely:
  - `no-loss-of-precision`
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
- Missing deprecated rule `indent-legacy` and imports rule `import/no-import-module-exports`
- Environment support for `jest`, `node`, and `serviceworkers` in the default config
- The `ignoreGlobals` property to the `camelcase` rule
- Tests for the React and TypeScript rule sets

### Changed:

- Re-enabled the `sort-imports` rule, with the hope the `allowSeparatedGroups` property introduced in v7.5.0 will fix our concerns with it
- Updated dependencies, including ESLint to v7.20.0
- Upgrade ECMAVersion to 2021, enable implied strict mode, and disallow return statements in the global scope
- Set `react/prop-types` to `off` in TypeScript overrides file, previously set to `error`
- Deprecated the Node ESLint rules, as they are have been supplanted with eslint-plugin-node
- Move `id-blacklist` ESLint rule to the deprecated list
- Move from package from it's own repository into the CryptoPapers Design System monorepo
- Run tests using Jest from the monorepo root
- Allow Pascal casing in TypeScript variable definitions to permit standard React component naming conventions

### Fixed:

- Append `jest/` prefix to all rules in the Jest ruleset
- Use imported rules to extend the default config
- Remove incorrect options object from `@typescript-eslint/strict-boolean-expressions` rule

## [v1.0.1](https://github.com/crypto-papers/design-system/tree/eslint-config%401.0.1) - 2020-04-25

### Changed:

- Corrected typo in readme that switched the React and TypeScript dependencies
- Set NPM access to be public by default

## [v1.0.0](https://github.com/crypto-papers/design-system/tree/eslint-config%401.0.0) - 2020-04-25

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

## [v0.1.0](https://github.com/crypto-papers/design-system/tree/eslint-config%400.1.0) - 2019-10-15

### Added:

- React, React Hooks, and JSX A11y rule definitions
- Import rule definitions
- List of ESLint React plugin rules disabled by Prettier
- A changelog and readme

## [v0.0.1](https://github.com/crypto-papers/design-system/tree/eslint-config%400.0.1) - 2019-10-13 [Initial Release]

### Added:

- Base ESLint rule definitions
- Seamless Prettier integration
- React-related ESLint plugins (jsx-a11y, react, and react-hooks) listed as dependencies
- List of ESLint rules disabled by Prettier
