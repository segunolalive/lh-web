import htm from 'https://unpkg.com/htm?module';
import Banner from '/admin/preview-templates/banner.js'

const html = htm.bind(h);

export default createClass({
  render() {
    const { background, row } = this.props.entry.getIn(['data']).toJS();
    return html`
      <${Banner} entry=${this.props.entry} />
      <section class="section-base section-color">
        <div class="container">
          <div class="row row-fit-lg">
            <div class="col-lg-3">
              <p>
                ${row && row[0].column1}
              </p>
            </div>
            <div class="col-lg-3">
              <p>
                ${row && row[0].column2}
              </p>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-5">
              ${row && row[0].image &&
                html`<img
                class="margin-23 margin-md-23"
                src="/media/lighthouse-background-09.jpg"
              />`}
            </div>
          </div>
        </div>
      </section>
      <section class="section-base">
        <div class="container">
          <div class="row">
            <div class="caption">
              <h2>Background</h2>
            </div>
            <hr class="space" />
            ${background}
            <hr class="space" />
          </div>
        </div>
      </section>
    `;
  }
});
