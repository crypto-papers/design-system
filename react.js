'use strict';

const reactVersion = '16.10.2';

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier/react',
  ],
  plugins: ['eslint-plugin-a11y', 'eslint-plugin-react', 'eslint-plugin-react-hooks'],
  rules: {},
  settings: {
    react: {
      version: reactVersion,
    },
  },
};
