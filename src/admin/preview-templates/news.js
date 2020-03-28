import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

const News = createClass({
  render() {
    const { headline, image, date, body } = this.props.entry
      .getIn(['data'])
      .toJS();

    return html`
      <section class="section-base section-color">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="grid-list" data-columns="1">
                <div class="grid-box">
                  <div class="grid-item">
                    <div class="cnt-box cnt-box-blog-side boxed" data-href="/#">
                      <a href="/#" class="img-box">
                        <div class="blog-date">
                          <span>${date.toLocaleDateString()}</span>
                        </div>
                        <img src="/media/${image}" alt="" />
                      </a>
                      <div class="caption">
                        <h2>${headline}</h2>
                        <span>${date.toLocaleDateString()}</span>
                        <div class="icon-list"></div>
                        <div>
                          ${body}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="list-pagination">
                <ul
                  class="pagination pagination-lg"
                  data-page-items="2"
                  data-options="scrollTop:true"
                ></ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
});

export default News;
