import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

const Home = createClass({
  render() {
    const { title, subHead, banner } = this.props.entry.getIn(['data']).toJS();
    const action = { text: 'Get Started', url: '/signup' };

    console.log(this.props.widgetFor('banner'));
    return html`
      <header class="header-image ken-burn-center dark preview-banner">
        <img class="" src="/media/${banner}" alt="banner" />
        <div class="container preview-banner__image">
          <hr class="space-lg" />
          <h1>${title}</h1>
          <h2>${subHead}</h2>
          <hr class="space" />
          <a href="${action.url}" class="btn btn-circle btn-sm"
            >${action.text}</a
          >
          <hr class="space-lg" />
        </div>
      </header>
    `;
  }
});

export default Home;
