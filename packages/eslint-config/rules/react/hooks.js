'use strict';
/**
 * Implements the rules of hooks as outlined in React's docs https://reactjs.org/docs/hooks-rules.html
 *
 */

module.exports = {
  plugins: ['eslint-plugin-react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
};
