import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

export default createClass({
  render() {
    const {
      contactHeadline = 'Contact Headline here',
      faqHeadline = 'FAQ Headline here',
      faqs = []
    } = this.props.entry.getIn(['data']).toJS();

    return html`
      <section class="section-base">
        <div class="container">
          <hr class="space-sm"/>
          <hr class="space"/>
          <div class="row">
            <div class="col-lg-8">
              <h3>${faqHeadline}</h3>
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
            <div class="col-lg-4">
              <div class="fixed-area support-box" data-offset="80">
                <h2>${contactHeadline}</h2>
                <h3>Placeholder Content</h3>
                <p>Update contact info in Contact section</p>
                <p>
                  Our team of seasoned professionals want to assist you.
                </p>
                <a href="/contact" class="btn-text">Contact</a>
                <hr class="space-sm" />
                <ul class="text-list text-list-bold">
                  <li>
                    <b>Address</b>
                    <p>14 Vistula Close, off Panama crescent, Maitama, Abuja.</p>
                  </li>
                  <li>
                    <b>Phone</b>
                    <p>080CALLLH</p>
                  </li>
                  <li>
                    <b>Email</b>
                    <p>info@projectlighthouse.gov.ng</p>
                  </li>
                </ul>
                <br />
                <div class="icon-links icon-social social-colors">
                  <a href="https://www.facebook.com/lighthouse_gov" target="blank" class="facebook">
                    <i class="icon-facebook"></i>
                  </a>
                  <a href="https://www.twitter.com/lighthouse_gov" target="blank" class="twitter">
                    <i class="icon-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/lighthouse_gov" target="blank" class="linkedin">
                    <i class="icon-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/lighthouse_gov" target="blank" class="instagram">
                    <i class="icon-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
});







