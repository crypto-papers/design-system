'use strict';

const Q = require('q');

const parserOpts = require('./parser-opts');
const writerOpts = require('./writer-opts');

const changelogOpts = Q.all([parserOpts, writerOpts]).spread((parser, writer) => {
  return {
    parserOpts: parser,
    writerOpts: writer,
  };
});

module.exports = changelogOpts;
