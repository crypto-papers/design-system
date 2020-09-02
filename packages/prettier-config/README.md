# CryptoPapers Prettier Config

This package extends [Prettier](https://prettier.io/) with a custom configuration so that code can be automatically formatted to conform to the CryptoPapers style guide.

## Install

Run the following command from the root of your project to install the custom configuration and the base Prettier package on which it is dependent:

```bash
npm install prettier @cryptopapers/prettier-config --save-dev
```

## Implement

Once installed, you can specify `@cryptopapers/prettier-config` as your preferred prettier configuration. There are several ways to to this:

1. Add the line `"prettier": "@cryptopapers/prettier-config"` to your project's `package.json`;
1. Export the string `"@cryptopapers/prettier-config"` from one of the supported config file types (i.e. - `.prettierrc`, `.prettierrc.toml`, `prettier.config.js`, or `.prettierrc.js`);

## Extend

To add to or modify the rules implemented by the package, import the package into a `.prettierrc.js` file and export your modifications. For example, to keep all the rules defined by the package with the exception of the semicolon rule, your `.prettierrc.js` would look like so:

```js
module.exports = {
  ...require("@cryptopapers/prettier-config"),
  semi: false
};
```
