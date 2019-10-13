'use strict';

const reactVersion = '16.10.2';

module.exports = {
  extends: [
    'eslint-config-prettier/react',
  ],
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  rules: {},
  settings: {
    react: {
      version: reactVersion,
    },
  },
};
