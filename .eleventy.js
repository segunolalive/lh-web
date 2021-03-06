const fs = require('fs');

const site = require('./src/_data/site.json');
// Import filters
const dateFilter = require('./src/filters/date-filter.js');
const markdownFilter = require('./src/filters/markdown-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = function(config) {
  config.addPassthroughCopy('themekit');
  config.addPassthroughCopy('media');
  config.addPassthroughCopy('static');
  config.addPassthroughCopy('src/admin');

  // Filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('markdownFilter', markdownFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  const now = new Date();

  // Custom collections
  const liveArticle = article => article.date <= now && !article.data.draft;

  config.addCollection('newsFeed', collection => {
    return [
      ...collection.getFilteredByGlob('./src/news/*.md').filter(liveArticle)
    ].reverse();
  });

  config.addCollection('postsList', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md').filter(liveArticle)
    ].reverse();
  });

  config.addCollection('featuredPosts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md').filter(liveArticle)
    ].reverse().slice(0, site.maxPostsPerPage);;
  });

  config.addCollection('tagList', require('./src/_11ty/getTagList'));

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
    passthroughFileCopy: true,
    pathPrefix: '/',
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };
};
