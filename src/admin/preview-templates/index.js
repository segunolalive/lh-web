import Home from '/admin/preview-templates/home.js';
import News from '/admin/preview-templates/news.js';
import Banner from '/admin/preview-templates/banner.js';

CMS.registerPreviewTemplate('home', Home);
CMS.registerPreviewTemplate('news', Banner);
CMS.registerPreviewTemplate('about', Banner);

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
    CMS.registerPreviewStyle('./previews.css');
  });

