import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

const Banner = createClass({
  render() {
    // const entry = this.props.entry;
    // const title = entry.getIn(['data', 'title']);
    // const subTitle = entry.getIn(['data', 'subTitle']);

    const { title, subTitle } = this.props.entry.getIn(['data']).toJS()

    return html`
    <header class="header-image ken-burn-center light">
      <div class="container">
        <hr class="space-lg"/>
        <h1>${title}</h1>
        <h2>${subTitle}</h2>
        <hr class="space" />
        <hr class="space-lg" />
      </div>
    </header>
      `;
  }
});

export default Banner;
