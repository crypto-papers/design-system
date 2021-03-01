'use strict';

const Q = require('q');

const conventionalChangelog = require('./options/conventional-changelog');
const parserOpts = require('./options/parser-opts');
const recommendedBumpOpts = require('./options/recommended-bump');
const writerOpts = require('./options/writer-opts');

const presetOpts = cb => {
  Q.all([conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts]).spread(
    (changelog, parser, bump, writer) => {
      const opts = {
        conventionalChangelog: changelog,
        gitRawCommitsOpts: { noMerges: null },
        parserOpts: parser,
        recommendedBumpOpts: bump,
        writerOpts: writer,
      };

      cb(null, opts);
    }
  );
};

module.exports = presetOpts;
