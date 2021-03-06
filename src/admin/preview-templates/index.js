import Home from '/admin/preview-templates/home.js';
import News from '/admin/preview-templates/news.js';
import Banner from '/admin/preview-templates/banner.js';
import About from '/admin/preview-templates/about.js';
import Categories from '/admin/preview-templates/project-categories.js';
import FAQs from '/admin/preview-templates/faq.js';
import Contact from '/admin/preview-templates/contact.js';


CMS.registerPreviewTemplate('home', Home);
CMS.registerPreviewTemplate('news', Banner);
CMS.registerPreviewTemplate('newsItem', News);
CMS.registerPreviewTemplate('about', About);
CMS.registerPreviewTemplate('projectCategories', Categories);
CMS.registerPreviewTemplate('faqs', FAQs);
CMS.registerPreviewTemplate('contact', Contact);

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
    CMS.registerPreviewStyle('./preview-templates/previews.css');
  });

