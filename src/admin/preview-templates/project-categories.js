import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

const Categories = createClass({
  render() {

    console.log(this.props.entry.getIn(['data']).toJS());
    const { categories = [], title } = this.props.entry.getIn(['data']).toJS();

    return html`
    <section class="section-base section-color align-center">
      <div class="container">
        <h2>${title}.</h2>
        <hr class="space"/>
        <div class="grid-list" data-columns="2" data-columns-md="2" data-columns-xs="1" data-anima="fade-bottom" data-timeline="asc" data-time="1000" data-timeline-time="300">
        <div class="grid-box">
          ${categories.map(({ category, description }) => (
            html`
                <div class="grid-item">
                  <div class="cnt-box cnt-box-top-icon boxed align-center">
                    <div class="caption">
                      <h2>${category}</h2>
                      <p>
                        ${description}
                      </p>
                    </div>
                  </div>
                </div>
              `
            ))}
          </div>
        </div>
      </div>
    </section>

    `;
  }
});

export default Categories;
