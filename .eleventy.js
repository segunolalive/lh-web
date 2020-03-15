const fs = require('fs');
// Import filters
const dateFilter = require('./src/filters/date-filter.js');
const markdownFilter = require('./src/filters/markdown-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

const site = require('./src/_data/site.json');

module.exports = function(config) {
  config.addPassthroughCopy('themekit');
  config.addPassthroughCopy('media');
  config.addPassthroughCopy('static');
  config.addPassthroughCopy('src/filters');
  config.addPassthroughCopy('src/admin');
  config.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');

  // Filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('markdownFilter', markdownFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  const now = new Date();

  // Custom collections
  const liveNews = article => article.date <= now && !article.data.draft;

  config.addCollection('newsFeed', collection => {
    return [
      ...collection.getFilteredByGlob('./src/news/*.md').filter(liveNews)
    ].reverse();
  });

  config.addCollection('faqs', collection => {
    return [...collection.getFilteredByGlob('./src/faqs/*.md')];
  })

  // 404
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    passthroughFileCopy: true
  };
};
