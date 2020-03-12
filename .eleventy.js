module.exports = function(config) {
  config.addPassthroughCopy('themekit');
  config.addPassthroughCopy('media');
  config.addPassthroughCopy('static');

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md']
  };
};
