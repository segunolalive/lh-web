
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

const News = createClass({
  render() {
    const entry = this.props.entry;
    const title = entry.getIn(['data', 'title']);
    const subTitle = entry.getIn(['data', 'subTitle']);
    const banner = entry.getIn(['data', 'banner']);
    const action = { text: 'Get Started', url: '/signup' };

    return html`
      <section class="section-base section-color">
        <div class="container">
          <div class="row">
            {% include "partials/newsFeed.njk" %}

            <div class="col-lg-4 widget">
              <hr class="space visible-md"/>
              <hr class="space-sm"/>
              <h3>Categories</h3>
              <hr class="space-xs"/>
              <div class="menu-inner menu-inner-vertical">
                <ul>
                  <li>
                    <a href="/news">
                      Debt Recovery
                    </a>
                  </li>
                  <li>
                    <a href="/news">
                      Revenue performance
                    </a>
                  </li>

                </ul>
              </div>
              <hr class="space-sm"/>
              <h3>Latest posts</h3>
              <hr class="space-sm"/>
              <div class="menu-inner menu-inner-vertical menu-inner-image">
                <ul>
                  <li>
                    <a href="/news_item">
                      <img src="/media/minister-of-finance.jpg" alt=""/>
                      <span>February 12, 2020</span>
                      2nd Project Lighthouse Steering committee meeting
                    </a>
                  </li>
                  <li>
                    <a href="news_item">
                      <img src="/media/lighthouse-image-02.jpg" alt=""/>
                      <span>February 25, 2020</span>
                      Six best practices for using artificial intelligence data
                    </a>
                  </li>
                  <li>
                    <a href="news_item">
                      <img src="/media/lighthouse-image-04.jpg" alt=""/>
                      <span>April 19, 2020</span>
                      Machine learning and AI are raising concerns
                    </a>
                  </li>
                </ul>
              </div>
              <hr class="space-sm"/>
              <h3>Tags</h3>
              <hr class="space-sm"/>
              <div class="list-tags">
                <a href="/news">Debt Recovery</a>
                <a href="/news">Revenue Performance</a>
                <a href="/news">Economy</a>
                <a href="/news">Data</a>
              </div>
              <hr class="space-sm"/>
            </div>
          </div>
        </div>
      </section>
    `;
  }
});

export default News;
