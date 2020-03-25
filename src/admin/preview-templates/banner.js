import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

const Banner = createClass({
  render() {

    const { title, subHead } = this.props.entry.getIn(['data']).toJS();

    return html`
      <header class="header-image ken-burn-center light">
        <div class="container">
          <hr class="space-lg" />
          <h1>${title}</h1>
          <h2>${subHead}</h2>
          <hr class="space" />
          <hr class="space-lg" />
        </div>
      </header>
    `;
  }
});

export default Banner;
