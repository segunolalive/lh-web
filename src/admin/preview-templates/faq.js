import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

export default createClass({
  render() {
    const { headline, faqs = [] } = this.props.entry.getIn(['data']).toJS();

    return html`
      <section class="section-base">
        <div class="container">
          <hr class="space-sm"/>
          <hr class="space"/>
          <div class="row">
            <div class="col-lg-12">
              <h3>${headline}</h3>
              <hr class="space-sm" />
              <ul class="accordion-list">
                ${faqs.map(item => (
                  html`
                    <li>
                      <a href="#">${item.question}</a>
                      <div class="content">
                        <p>
                          ${item.answer}
                        </p>
                      </div>
                    </li>
                  `
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    `;
  }
});







