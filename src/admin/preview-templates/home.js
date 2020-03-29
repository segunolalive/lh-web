import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

const Home = createClass({
  render() {
    console.log(this.props.entry.toJS());
    const { headline, subHead, banner, summary, callout, extraSummary, verify } = this.props.entry.getIn(['data']).toJS();
    const action = { text: 'Get Started', url: '/signup' };

    return html`
      <header class="header-image ken-burn-center dark preview-banner">
        <img class="" src="/media/${banner}" alt="" />
        <div class="container preview-banner__content">
          <hr class="space-lg" />
          <h1>${headline}</h1>
          <h2>${subHead}</h2>
          <hr class="space" />
          <a href="${action.url}" class="btn btn-circle btn-sm"
            >${action.text}</a
          >
          <hr class="space-lg" />
        </div>
      </header>
      <main>
        <section id="features" class="section-base section-color">
          <div class="container">
            <h2 class="align-center">${summary[0].headline}</h2>
            <p class="align-center width-650">
              ${summary[0].subhead}
            </p>
            <hr class="space"/>
            <div class="grid-list" data-columns="3" data-columns-md="2" data-columns-xs="1">
              <div class="grid-box">

              ${
                summary[0].columns.map((column, index) => {
                  const icons = ["im-laptop-3", "im-bar-chart4", "im-shuffle-4"]
                  return html`
                    <div class="grid-item">
                      <div class="cnt-box cnt-box-top-icon boxed">
                        <i class=${icons[index]}></i>
                        <div class="caption">
                          <h2>${column.headline}</h2>
                          <p>
                            ${column.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  `
                })
              }

              </div>
            </div>
          </div>
        </section>
        <section class="section-block section-block-full section-block-right">
          <img class="" src="/media/${callout[0].background}" alt="" />
          <div class="container">
            <div class="row">
              <div class="">
                <h2>${callout[0].headline}</h2>
                <p>
                  ${callout[0].content}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="overview" class="section-base section-top-overflow">
          <div class="container">
            <br />
            <hr class="space-lg"/>
            <div class="row">
              <div class="col-lg-6 order-md-first">
                <h2>${extraSummary[0].headline}</h2>
                <p>
                  ${extraSummary[0].content}
                </p>
                <hr class="space-sm visible-md"/>
              </div>
              <div class="col-lg-6">
                <img class="margin-11" src="/media/${extraSummary[0].image}" alt=""/>
              </div>
            </div>
            <br />
          </div>
        </section>
        <section class="section-image light bg-green">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-8 col-md-8">
                <h2>${verify[0].headline}.</h2>
                <p>
                  ${verify[0].summary}
                </p>
              </div>
              <div class="col-lg-4 col-md-4 align-right align-left-sm">
                <a href="/signup" class="btn btn-circle btn-sm">Verify Now</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    `;
  }
});

export default Home;






