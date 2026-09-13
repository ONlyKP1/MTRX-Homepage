import { AnimatedSection } from '../AnimatedSection';

/*
  Who this is for, described by the situation rather than the sector.

  This was eleven industry cards on an auto-advancing carousel. Two problems
  with that, and only one of them is positioning.

  Naming sectors re-anchors the company as a high-risk processor the moment a
  bank, a partner or a provider reads the homepage, which is the thing the
  repositioning exists to stop. It also narrows the market: a SaaS business
  selling into thirty countries is exactly as good a customer as a gaming
  operator, and a list of eleven verticals tells them this is not for them.

  A business recognises its own situation faster than it recognises its
  category. Everybody previously listed still sees themselves here.

  The sector taxonomy is not lost. It still exists in onboarding, where it does
  real work routing an application, which is the place it belongs: an
  operational detail rather than the shop window.
*/
const situations = [
  {
    title: 'You sell in more than one country',
    body: 'Customers in different markets reach the same checkout, priced in the currency they think in and offered the methods they already use. No separate integration per market.'
  },
  {
    title: 'One provider is not enough',
    body: 'Approval rates differ by country, by issuer and by hour. When a route declines, the next one takes the payment rather than the sale ending there.'
  },
  {
    title: 'Waiting days for money is not workable',
    body: 'Settlement runs on stablecoin rails, which have no cut-off time, no weekend and no bank holiday. Money crosses a border without waiting for two banks to open.'
  },
  {
    title: 'Reconciliation should not scale with providers',
    body: 'However many routes a payment could have taken, it arrives as one record, in one ledger, with the fee and the net already worked out.'
  }
];

export function BusinessModels() {
  /*
    A grid, not a carousel.

    Four things that fit on a screen do not need to be revealed one at a time
    on a four second timer. A carousel hides three quarters of its content from
    somebody scanning, moves the thing they were reading, and needs state,
    autoplay, pause-on-interact and two arrow buttons to do it. All of that is
    gone with the eleventh card.
  */
  return (
    <section className="hp-verticals" id="verticals">
      <AnimatedSection className="hp-verticals__header" animation="fade-up">
        <span className="hp-section-label">Who We Serve</span>
        <h2 className="hp-section-title">
          Businesses selling to<br /><em>customers everywhere.</em>
        </h2>
        <p className="hp-section-subtitle">
          Not an industry, a situation. If any of these is true of you, orchestration
          is the difference between entering a market and integrating with one.
        </p>
      </AnimatedSection>

      <div className="hp-situations">
        {situations.map((s, i) => (
          <AnimatedSection
            key={s.title}
            className="hp-situation"
            animation="fade-up"
            delay={i * 0.08}
          >
            <h3 className="hp-situation__title">{s.title}</h3>
            <p className="hp-situation__body">{s.body}</p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
