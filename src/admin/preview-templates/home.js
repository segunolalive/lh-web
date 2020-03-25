import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

const Home = createClass({
  render() {
    const entry = this.props.entry;
    const title = entry.getIn(['data', 'title']);
    const subTitle = entry.getIn(['data', 'subTitle']);
    const banner = entry.getIn(['data', 'banner']);
    const action = { text: 'Get Started', url: '/signup' };

  console.log(this.props.widgetFor('banner'))
    return html`
    <header class="header-image ken-burn-center dark preview-banner">
      <img class="" src="/media/${banner}" alt="banner" />
      <div class="container preview-banner__image">
        <hr class="space-lg"/>
        <h1>${title}</h1>
        <h2>${subTitle}</h2>
        <hr class="space" />
        <a href="${action.url}" class="btn btn-circle btn-sm">${action.text}</a>
        <hr class="space-lg" />
      </div>
    </header>
      `;
  }
});

export default Home;
