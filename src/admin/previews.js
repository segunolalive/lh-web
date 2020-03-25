const { w3DateFilter, markdownFilter, dateFilter, helpers } = previewUtil;

import Home from '/admin/preview-templates/home.js';

const env = nunjucks.configure();

env.addFilter('w3DateFilter', w3DateFilter);
env.addFilter('markdownFilter', markdownFilter);
env.addFilter('dateFilter', dateFilter);

const Preview = ({ entry, path, context }) => {
  const data = context(entry.get('data').toJS());
  const html = env.render(path, { ...data });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

const HomeX = ({ entry }) => (
  <Preview
    entry={entry}
    path="index.njk"
    context={({ title, body, postsHeading, archiveButtonText }) => ({
      title,
      content: markdownFilter(body),
      postsHeading,
      archiveButtonText,
      collections: {
        postFeed: [
          {
            url: 'javascript:void(0)',
            date: new Date(),
            data: {
              title: 'Sample Post'
            }
          }
        ]
      }
    })}
  />
);

const Post = ({ entry }) => (
  <Preview
    entry={entry}
    path="layouts/post.njk"
    context={({ title, date, body }) => ({
      title,
      date,
      content: markdownFilter(body || '')
    })}
  />
);

const Page = ({ entry }) => (
  <Preview
    entry={entry}
    path="layouts/page.njk"
    context={({ title, body }) => ({
      title,
      content: markdownFilter(body || '')
    })}
  />
);

const SiteData = ({ entry }) => (
  <Preview
    entry={entry}
    path="base.njk"
    context={({ name, shortDesc, showThemeCredit }) => ({
      site: {
        name,
        shortDesc,
        showThemeCredit
      }
    })}
  />
);

const Nav = ({ entry }) => (
  <Preview
    entry={entry}
    path="layouts/base.njk"
    context={({ items }) => ({
      navigation: {
        items
      }
    })}
  />
);

// CMS.registerPreviewTemplate('home', Home);
CMS.registerPreviewTemplate('posts', Post);
CMS.registerPreviewTemplate('generic_pages', Page);
CMS.registerPreviewTemplate('site_data', SiteData);

// Register any CSS file on the home page as a preview style
fetch('/')
  .then(response => response.text())
  .then(html => {
    const f = document.createElement('html');
    f.innerHTML = html;
    Array.from(f.getElementsByTagName('link')).forEach(tag => {
      if (tag.rel == 'stylesheet' && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });
