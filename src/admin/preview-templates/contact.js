import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

export default createClass({
  render() {
    console.log(this.props.entry.getIn(['data']).toJS())

    const { headline, contactInfo = []} = this.props.entry.getIn(['data']).toJS()

    return html`
      <div class="col-lg-5">
          <hr class="space visible-md"/>
          <hr class="space" />
          <p>
           ${headline}
          </p>
          <ul class="text-list text-list-line">
            ${contactInfo.map(({ type, value}) => (
              html`
                <li>
                  <b>${type}</b>
                  <hr/>
                  <p>${value}</p>
                </li>
              `
            ))}
          </ul>
          <hr class="space-sm"/>
          <div class="icon-links icon-social icon-links-grid social-colors">
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
    `;
  }
});





