'use strict';

const test = require('tape');

const baseConfig = require('../index');
const reactConfig = require('../react');

test('All entry points parse properly.', t => {
  t.doesNotThrow(() => baseConfig, 'Index config does not throw error.');
  t.doesNotThrow(() => reactConfig, 'React config does not throw error.');

  t.end();
});