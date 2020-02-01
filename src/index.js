import Q from 'q';
import conventionalChangelog from './conventional-changelog';
import parserOpts from './parser-opts';
import recommendedBumpOpts from './conventional-recommended-bump';
import writerOpts from './writer-opts';

export default Q.all([conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts]).spread(
  (conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts) => ({
    conventionalChangelog,
    parserOpts,
    recommendedBumpOpts,
    writerOpts
  })
);
