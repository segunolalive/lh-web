import htm from 'https://unpkg.com/htm?module';
import Banner from '/admin/preview-templates/banner.js'

const html = htm.bind(h);

export default createClass({
  render() {
    return html`
      <${Banner} entry=${this.props.entry} />
      <section class="section-base section-color">
        <div class="container">
          <div class="row row-fit-lg">
            <div class="col-lg-3">
              <p>
                The objective of Lighthouse is to aggregate data from key data
                sources &amp; provide the intelligence &amp; profiling engine
                for efficient &amp; intelligent data-driven processes. It is the
                <b>“single source of truth”</b>
                for revenue &amp; tax-related intelligence.
              </p>
            </div>
            <div class="col-lg-3">
              <p>
                This intelligence would in turn support the Ministry, its
                agencies, revenue agencies, tax authorities and other
                stakeholders to be better positioned to address the revenue
                challenges faced by the country.
              </p>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-5">
              <img
                class="margin-23 margin-md-23"
                src="/media/lighthouse-background-09.jpg"
              />
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
            <p>
              In 2017, the Federal Government of Nigeria inaugurated a committee
              to oversee the implementation of a compliance scheme seeking ways
              to reduce budget deficits and tax shortfalls while simultaneously
              managing revenue more efficiently and diversifying revenue sources
              by improving revenue generation in the non-oil sector of the
              economy.
            </p>
            <p>
              Hence, the introduction of Voluntary Assets and Income Declaration
              Scheme (VAIDS) on 29 June 2017, which was a compliance strategy
              with a time-threshold opportunity for taxpayers at the Federal and
              State levels to regularize their tax status relating to previous
              tax periods. Full and honest declarants of previously undisclosed
              assets and income during the window provided shall be forgiven of
              interest and penalties on overdue taxes and the assurance that
              they will not face criminal prosecution for tax offences or be
              subject to tax investigation.
            </p>
            <p>
              In that regard, the Federal Ministry of Finance piloted Project
              Lighthouse, which involved the aggregation, centralization and
              analysis of nationwide tax payer data within the Federal Ministry
              of Finance. The objective of Lighthouse was for data to be
              aggregated from key data sources and Lighthouse would provide the
              intelligence and profiling engine for more efficient and
              intelligent data driven tax assessments, thus ensuring major tax
              loopholes are plugged and revenues dramatically increased.
            </p>
            <hr class="space" />
            <p class="quote">
              One of the key economic policy objectives of the current
              administration, as contained in the Economic Recovery and Growth
              Plan (ERGP), is improving overall Federal Government revenues by
              targeting and increasing revenues from non-oil revenue sources.
              <br /><br />
              Honorable Minister Of Finance.
            </p>
            <hr class="space" />
            <p>
              Following the consent of authority and the subsequent ratification
              of the project by the Federal Executive Council (FEC) on the 8th
              of May 2019,
              <b
                >Project Lighthouse was formal inaugurated by the Minister,
                Federal Ministry of Finance on the 24th May, 2019</b
              >.
            </p>
            <hr class="space" />
          </div>
        </div>
      </section>
    `;
  }
});
