# CryptoPapers ESLint Config

This package provides an opinionated but extensible ESLint configuration that enforces the JavaScript coding preferences defined by the CryptoPapers style guide. The base configuration provides a general ruleset, linting for Jest, and integration with Prettier. This base canfig can be further extended with subpackages for React and TypeScript.

## Installation

Run the following command from the root of your project to install the config and [ESLint](https://www.npmjs.com/package/eslint) (on which it depends):

`npm install eslint @cryptopapers/eslint-config --save-dev`

### Peer Dependencies

This config depends on a number of ESLint plugins and other libraries to function properly. Below are the commands to run to install the required dependencies for each of the possible configurations.

- **Base Config:** `npm i -D eslint-plugin-import eslint-plugin-jest eslint-plugin-prettier prettier`
- **React:** `npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript`
- **TypeScript:** `npm i -D eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`

## Usage

### Basic

Once installed, add an `.eslintrc` file to your project root and extend the CryptoPapers eslint-config as such:

```js
module.exports = {
  extends: ['@cryptopapers/eslint-config'],
};
```

**Note:** More details on configuring ESLint for you project can be found in [ESLint's official documentation](https://eslint.org/docs/user-guide/configuring).

### Sub-packages

This package bundles two additional sets of optional rules pertaining to React and TypeScript applications, respectively. To enable the React sub-package, add `@cryptopapers/eslint-config/react` to the extends array. For TypeScript, add `@cryptopapers/eslint-config/typescript`. If you so choose, you can chain all of the configs together as such:

```js
module.exports = {
  extends: [
    '@cryptopapers/eslint-config',
    '@cryptopapers/eslint-config/react',
    '@cryptopapers/eslint-config/typescript',
  ],
};
```

Note that the TypeScript config also expects a `tsconfig.json` file at the root of your projects.

### Modifications

You can override any rule in the configuration by adding it to the rules object in your `.eslintrc`. For example, to disable the `no-var` rule you would modify you `.eslintrc` as such:

```js
module.exports = {
  extends: ['@cryptopapers/eslint-config'],
  rules: {
    'no-var': 'off',
  },
};
```

### A Note on Prettier

This config is intended to be used with in conjunctions with [Prettier](https://prettier.io/). Prettier is not a linter, but rather an automatic code formatter focused squarely on stylistic choices. Some of the choices it makes mirrors - and at times can conflict with - certain ESLint rules. As a result a number of ESLint rules are turned off when using this config. If you chose not to use Prettier in your project, you may find that you need to define additional ESLint rules to make up for this shortfall. A full list of the rules turned off by Prettier can be found in our [documentation section](https://github.com/crypto-papers/eslint-config/blob/master/docs/prettier.md).

If you like the linting rules we've set up here and are using Prettier in your project, you may also be interested in our [Prettier config package](https://www.npmjs.com/package/@cryptopapers/prettier-config).

## Acknowledgements

First off we'd like to thank the Airbnb team for their wonderful package [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base). As the de facto industry standard, it not only inspired this package but also provided us with a model and helped us pick reasonable defaults for some of the more esoteric rules.

As noted above, lean fairly heavily on the stylistic decisions made by the team at [Prettier](https://prettier.io/) and thank them for making code formatting so simple. In addition to Prettier, this package depends on a number of great ESLint plugins to provide additional rule sets. Specifically, we use:

- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

Finally, we would be remise if we didn't thank [ESLint](https://eslint.org/). Without their product (and fantastic documentation) this package wouldn't exist and the world would be a much more buggy place. :wink:
