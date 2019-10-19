'use strict';

const test = require('tape');

const configBase = require('../index');
const configReact = require('../react');
const ruleA11y = require('../rules/react/a11y');
const rulesHooks = require('../rules/react/hooks');
const rulesImport = require('../rules/import/index');
const rulesReact = require('../rules/react/base');

test('All entry points parse properly.', t => {
  t.doesNotThrow(() => configBase, 'Index config does not throw error.');
  t.doesNotThrow(() => configReact, 'React config does not throw error.');

  t.end();
});

test('Ensure that required plugins are included.', t => {
  const msg = 'plugin is present.';

  t.test('- Import plugins:', i => {
    i.deepEqual(rulesImport.plugins, ['eslint-plugin-import'], `A11y ${msg}`);
    
    i.end();
  });

  t.test('- React plugins:', r => {
    r.deepEqual(ruleA11y.plugins, ['eslint-plugin-jsx-a11y'], `A11y ${msg}`);
    r.deepEqual(rulesHooks.plugins, ['eslint-plugin-react-hooks'], `React hooks ${msg}`);
    r.deepEqual(rulesReact.plugins, ['eslint-plugin-react'], `React ${msg}`);
    
    r.end();
  })

  t.end();
})