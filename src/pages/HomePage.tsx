import { useState, useEffect, useRef } from 'react';
import { AnimatedSection, AnimatedCounter } from '../components/AnimatedSection';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="rgba(197,164,78,.18)" />
    <polyline points="4.5 8.2 7 10.8 11.5 5.5" stroke="#C5A44E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const painPoints = [
  {
    problem: 'One provider cannot cover every market',
    pBody: 'An acquirer performs well in the markets it knows and poorly outside them. Every new country means another integration, another contract, and another set of settlement terms to reconcile.',
    solution: 'One integration, many providers.',
    sBody: 'MTRX sits above the providers rather than beside them. Adding a market, a method, or a processor becomes a configuration change rather than an engineering project.',
  },
  {
    problem: 'Payments that fail for crossing a border',
    pBody: 'A card issued in one country and presented to an acquirer in another is more likely to be declined, whatever the customer or the purchase. Revenue is lost to geography rather than to risk.',
    solution: 'Routing that follows the customer.',
    sBody: 'Each payment is sent to the provider with the strongest record for that country, currency, and method, then retried through an alternative when an attempt fails.',
  },
  {
    problem: 'Cards are not how the world pays',
    pBody: 'A great deal of the world’s online spending never touches a card. A checkout offering cards alone quietly excludes a large share of buyers in many markets.',
    solution: 'Local methods, one checkout.',
    sBody: 'Bank transfer, open banking, wallets, and regional methods are offered according to where the customer is, without a separate integration behind each one.',
  },
  {
    problem: 'Settlement that waits for banking hours',
    pBody: 'Cross border transfers move through correspondent banks, cut off times, and weekends. Working capital sits in transit for days while the business carries the gap.',
    solution: 'Rails that do not close.',
    sBody: 'Bank rails, open banking, and stablecoin settlement operate together as complementary primary rails. When conventional rails are closed, value still moves.',
  },
  {
    problem: 'Currency treated as an afterthought',
    pBody: 'Conversion applied at opaque rates, on somebody else’s schedule, turns a margin that should be predictable into one the business discovers after the fact.',
    solution: 'Multi currency by design.',
    sBody: 'Charge in the customer’s currency and settle in your own. The rate and the cost of conversion are shown against each transaction rather than buried in a monthly statement.',
  },
  {
    problem: 'Compliance repeated market by market',
    pBody: 'Each jurisdiction brings its own verification, screening, and reporting obligations, usually met by repeating manual work the previous market already required.',
    solution: 'Embedded compliance, automated end to end.',
    sBody: 'Business verification, identity checks, sanctions and PEP screening, and continuous AML monitoring run inside the payment flow and extend to each new market as it is added.',
  },
];

/*
  Illustrative, and every route crosses a border: collected in one currency,
  settled in another. That is the difference the platform exists to make, so
  the example transactions should show it rather than a currency returning to
  itself.
*/
const txnFeed = [
  { from: 'GBP', crypto: 'USDC', to: 'EUR', amount: '£12,400.00',   risk: 94, label: 'AML Clear',     status: 'Settled',  time: '2s' },
  { from: 'USD', crypto: 'USDC', to: 'MXN', amount: '$8,200.00',    risk: 87, label: 'KYC Verified',  status: 'Approved', time: '5s' },
  { from: 'EUR', crypto: 'USDT', to: 'GBP', amount: '€45,000.00',   risk: 91, label: 'PEP None',      status: 'Settled',  time: '9s' },
  { from: 'AED', crypto: 'USDC', to: 'USD', amount: 'AED 77,000.00', risk: 79, label: 'KYB OK',       status: 'Approved', time: '14s' },
  { from: 'SGD', crypto: 'USDC', to: 'GBP', amount: 'S$52,900.00',  risk: 88, label: 'AML Clear',     status: 'Settled',  time: '21s' },
];

/*
  What the platform does, with the cross-border half of it first.

  The list was almost entirely compliance, which describes a business
  defending itself rather than one selling. Compliance stays, because it is
  real and it matters to the people signing contracts, but it is no longer the
  whole answer to what MTRX is.
*/
const tickerItems = ['Multi-Provider Routing', 'Automatic Failover', '100+ Currencies', 'Local Payment Methods', 'Stablecoin Settlement', 'Cross-Border by Default', 'One Reconciliation', 'KYB Verified', 'KYC Compliant', 'AML Monitored', 'PEP Screened'];

/*
  Who this is for, described by the situation rather than the sector.

  This was six industry cards. Naming sectors re-anchors the company as a
  high-risk processor the moment a bank, a partner or a provider reads the
  homepage, which is the thing the repositioning exists to stop. It also
  narrows the market: a SaaS business selling into thirty countries is exactly
  as good a customer as any vertical previously named here, and a list of
  categories tells them this is not for them.

  A business recognises its own situation faster than it recognises its
  category. Everybody previously listed still sees themselves here.

  The sector taxonomy is not lost. It still exists in onboarding, where it does
  real work routing an application, which is the place it belongs: an
  operational detail rather than the shop window.
*/
const verticals = [
  { tag: 'Multi Market',     title: 'You sell in more than one country',             body: 'Customers in different markets reach the same checkout, priced in the currency they think in and offered the methods they already use. No separate integration per market.',        color: '59, 130, 246' },
  { tag: 'Routing',          title: 'One provider is not enough',                    body: 'Approval rates differ by country, by issuer and by hour. When a route declines, the next one takes the payment rather than the sale ending there.',                                color: '20, 184, 166' },
  { tag: 'Settlement',       title: 'Waiting days for money is not workable',        body: 'Settlement runs on stablecoin rails, which have no cut-off time, no weekend and no bank holiday. Money crosses a border without waiting for two banks to open.',                   color: '99, 102, 241' },
  { tag: 'Reconciliation',   title: 'Reconciliation should not scale with providers', body: 'However many routes a payment could have taken, it arrives as one record, in one ledger, with the fee and the net already worked out.',                                           color: '52, 211, 153' },
];

export function HomePage() {
  const [painIdx, setPainIdx] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [vertIdx, setVertIdx] = useState(0);
  const [vertPaused, setVertPaused] = useState(false);
  const verticalsVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (carouselPaused) return;
    const t = setInterval(() => setPainIdx(i => (i + 1) % painPoints.length), 5500);
    return () => clearInterval(t);
  }, [painIdx, carouselPaused]);

  useEffect(() => {
    if (vertPaused) return;
    const t = setInterval(() => setVertIdx(i => (i + 1) % verticals.length), 7000);
    return () => clearInterval(t);
  }, [vertIdx, vertPaused]);

  useEffect(() => {
    const video = verticalsVideoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { video.play(); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mtrx-home">

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="mtrx-hero">
        {/* Video background */}
        <video
          className="mtrx-hero-video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="mtrx-hero-overlay" aria-hidden="true" />
        <div className="mtrx-hero-grid" aria-hidden="true" />
        <div className="mtrx-hero-radial" aria-hidden="true" />
        <div className="container">
          <div className="mtrx-hero-layout">

            {/* Left — copy */}
            <div className="mtrx-hero-copy">
              <AnimatedSection animation="fade-up" delay={0}>
                <p className="mtrx-eyebrow">MTRX PAY</p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={0.08}>
                <h1 className="mtrx-h1 mtrx-home-hero-h1 page-hero-h1">
                  Take Payments Anywhere.<br />
                  Settle Everywhere.<br />
                  <em>One Integration, Every Route.</em>
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={0.16}>
                <p className="mtrx-hero-sub">
                  MTRX Pay is payment orchestration for businesses that sell across borders. One integration reaches many providers, and every payment is routed to the one most likely to complete it, in the currency your customer already thinks in.<br /><br />
                  When a route fails, the next one takes it. Settlement runs on stablecoin rails, so money crosses a border at the speed of the internet rather than the speed of correspondent banking.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={0.24}>
                <div className="mtrx-hero-ctas">
                  <a href="/join" className="mtrx-btn-gold">Apply for Founding Access</a>
                  <a href="/technology" className="mtrx-btn-outline">Explore Platform ↓</a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — live transaction feed */}
            <AnimatedSection animation="fade-left" delay={0.22} className="mtrx-hero-feed-wrap">
              <div className="mtrx-feed-card">
                <div className="mtrx-feed-head">
                  <span className="mtrx-feed-live">
                    <span className="mtrx-pulse" />
                    Typical Transactions
                  </span>
                  <span className="mtrx-feed-rate">
                    <AnimatedCounter value={1247} suffix="" duration={1600} />&thinsp;/min
                  </span>
                </div>

                <div className="mtrx-feed-rows">
                  {txnFeed.map((tx, i) => (
                    <div className="mtrx-feed-row" key={i}>
                      <div className="mtrx-feed-col-left">
                        <span className="mtrx-feed-route">
                          {tx.from === tx.crypto
                            ? <><span className="mtrx-feed-crypto">{tx.crypto}</span> → {tx.to}</>
                            : <>{tx.from} → <span className="mtrx-feed-crypto">{tx.crypto}</span> → {tx.to}</>
                          }
                        </span>
                        <span className="mtrx-feed-meta">Risk {tx.risk}/100</span>
                      </div>
                      <div className="mtrx-feed-col-right">
                        <span className="mtrx-feed-amount mtrx-feed-amount-gold">{tx.amount}</span>
                        <span className="mtrx-feed-footer-row">
                          <span className="mtrx-feed-status">{tx.status}</span>
                          <span className="mtrx-feed-time">{tx.time} ago</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mtrx-feed-foot">
                  <span>
                    ↑ <span className="mtrx-feed-gold">£<AnimatedCounter value={48} suffix="M" duration={1800} /></span> settled today
                  </span>
                  <span className="mtrx-feed-uptime">99.98% success rate</span>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ══════════════════════ METRICS ══════════════════════ */}
      <div className="mtrx-metrics-strip">
        <div className="container">
          {/*
            Figures that can be stood behind.

            "99.98% payment success rate" and "99.99% uptime SLA" were both
            here and neither is measured: there is no SLA anybody has signed
            and no success rate over enough payments to quote two decimal
            places of. A number on a payments homepage is the one a prospect
            repeats back in a meeting, so each of these is now either counted
            or a capability rather than a performance claim.
          */}
          <p className="mtrx-metrics-disclaimer">
            Platform capability, not performance to date
          </p>
          <div className="mtrx-metrics-row">
            {/* Measured against the live provider catalogue on 2026-09-13:
                113 fiat currencies and 22 providers considered on a single
                quote. Both quoted low. */}
            <AnimatedSection animation="fade-up" delay={0} className="mtrx-metric">
              <span className="mtrx-metric-num">
                <AnimatedCounter value={100} suffix="+" duration={1800} />
              </span>
              <span className="mtrx-metric-lbl">Currencies Accepted</span>
            </AnimatedSection>
            <div className="mtrx-metric-divider" />
            <AnimatedSection animation="fade-up" delay={0.08} className="mtrx-metric">
              <span className="mtrx-metric-num">
                <AnimatedCounter value={20} suffix="+" duration={1400} />
              </span>
              <span className="mtrx-metric-lbl">Providers Routed</span>
            </AnimatedSection>
            <div className="mtrx-metric-divider" />
            {/* Not a boast about our uptime, a fact about the rails:
                stablecoin settlement has no cut-off, weekend or bank
                holiday. */}
            <AnimatedSection animation="fade-up" delay={0.16} className="mtrx-metric">
              <span className="mtrx-metric-num"><AnimatedCounter value={24} suffix="/7" duration={1600} /></span>
              <span className="mtrx-metric-lbl">Settlement Window</span>
            </AnimatedSection>
            <div className="mtrx-metric-divider" />
            {/* Structural rather than aspirational. A merchant is paid from a
                wallet balance, and there is no card in that transaction to
                reverse. */}
            <AnimatedSection animation="fade-up" delay={0.24} className="mtrx-metric">
              <span className="mtrx-metric-num">0%</span>
              <span className="mtrx-metric-lbl">Merchant Chargebacks</span>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ══════════════════════ TICKER ══════════════════════ */}
      <div className="mtrx-ticker-wrap">
        <div className="mtrx-ticker-scroll">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="mtrx-ticker-chip">
              <span className="mtrx-ticker-dot" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════ PAIN CAROUSEL ══════════════════════ */}
      <section className="mtrx-pain-section">
        {/* Full-section video background */}
        <video className="mtrx-pain-bg-video" autoPlay muted loop playsInline aria-hidden="true">
          <source src="/carousel-bg.mp4" type="video/mp4" />
        </video>
        <div className="mtrx-pain-bg-overlay" aria-hidden="true" />

        <div className="container mtrx-pain-header-wrap">
          <AnimatedSection animation="fade-up">
            <div className="mtrx-sec-head">
              <span className="mtrx-sec-label">The Problem</span>
              <h2 className="mtrx-h2">The problems we were<br /><em>built to solve.</em></h2>
              <p className="mtrx-sec-sub">Selling into more markets multiplies the providers, methods, currencies, and rules a business has to hold together. Orchestration is what keeps that manageable as the number of markets grows.</p>
            </div>
          </AnimatedSection>
        </div>

        <div
          className="mtrx-carousel"
          onMouseEnter={() => setCarouselPaused(true)}
          onMouseLeave={() => setCarouselPaused(false)}
        >
          <div className="mtrx-carousel-content-wrap">
            {painPoints.map((item, i) => (
              <div key={i} className={`mtrx-carousel-slide${i === painIdx ? ' active' : ''}`}>
                <div className="mtrx-carousel-content">
                  <div className="mtrx-carousel-problem-block">
                    <span className="mtrx-pain-marker">THE PROBLEM</span>
                    <h3 className="mtrx-carousel-title mtrx-carousel-problem-title">{item.problem}</h3>
                    <p className="mtrx-pain-pbody">{item.pBody}</p>
                  </div>
                  <div className="mtrx-carousel-sep" />
                  <div className="mtrx-carousel-solution-block">
                    <span className="mtrx-pain-check">MTRX SOLUTION</span>
                    <h3 className="mtrx-carousel-title mtrx-carousel-solution-title">{item.solution}</h3>
                    <p className="mtrx-pain-sbody">{item.sBody}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mtrx-carousel-controls">
            <button
              className="mtrx-carousel-arrow"
              onClick={() => setPainIdx(i => (i - 1 + painPoints.length) % painPoints.length)}
              aria-label="Previous slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="mtrx-carousel-dots">
              {painPoints.map((_, i) => (
                <button
                  key={i}
                  className={`mtrx-carousel-dot${i === painIdx ? ' active' : ''}`}
                  onClick={() => setPainIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="mtrx-carousel-arrow"
              onClick={() => setPainIdx(i => (i + 1) % painPoints.length)}
              aria-label="Next slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>



      {/* ══════════════════════ WHO WE SERVE ══════════════════════ */}
      {(() => {
        return (
          <section className="mtrx-verticals-section">
            <div className="container">
              <AnimatedSection animation="fade-up">
                <div className="mtrx-sec-head">
                  <span className="mtrx-sec-label">Who We Serve</span>
                  <h2 className="mtrx-h2">Businesses selling to<br /><em>customers everywhere.</em></h2>
                  <p className="mtrx-sec-sub">Not an industry, a situation. If any of these is true of you, orchestration is the difference between entering a market and integrating with one. Every merchant completes a full onboarding and compliance assessment before a single transaction is processed.</p>
                </div>
              </AnimatedSection>

              <div
                className="mtrx-vert-carousel"
                onMouseEnter={() => setVertPaused(true)}
                onMouseLeave={() => setVertPaused(false)}
              >
                <div className="mtrx-vert-carousel-wrap">
                  {verticals.map((v, i) => (
                    <div key={i} className={`mtrx-vert-slide${i === vertIdx ? ' active' : ''}`}>
                      <div className="mtrx-vertical-card" style={{ borderTop: `3px solid rgb(${v.color})`, boxShadow: `0 0 40px rgba(${v.color},.12)` }}>
                        <span className="mtrx-vertical-tag" style={{ color: `rgb(${v.color})` }}>{v.tag}</span>
                        <h3 className="mtrx-vertical-title">{v.title}</h3>
                        <p className="mtrx-vertical-body">{v.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mtrx-vert-controls">
                  <button className="mtrx-carousel-arrow" onClick={() => setVertIdx(i => (i - 1 + verticals.length) % verticals.length)} aria-label="Previous">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                  </button>
                  <div className="mtrx-carousel-dots">
                    {verticals.map((_, i) => (
                      <button key={i} className={`mtrx-carousel-dot${i === vertIdx ? ' active' : ''}`} onClick={() => setVertIdx(i)} aria-label={`Go to slide ${i + 1}`} />
                    ))}
                  </div>
                  <button className="mtrx-carousel-arrow" onClick={() => setVertIdx(i => (i + 1) % verticals.length)} aria-label="Next">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ══════════════════════ PRICING ══════════════════════ */}
      <section className="mtrx-pricing-section">
        <div className="mtrx-pricing-glow" aria-hidden="true" />
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="mtrx-pricing-card">
              <span className="mtrx-pricing-tag">Founding Partner</span>
              <div className="mtrx-pricing-price">£49<span>/month</span></div>
              <div className="mtrx-pricing-txn">+ 7% per transaction</div>
              <ul className="mtrx-pricing-features">
                <li><CheckIcon /> £149 one-time setup fee</li>
                <li><CheckIcon /> 50+ payment methods worldwide</li>
                <li><CheckIcon /> Multi-currency settlement</li>
                <li><CheckIcon /> Managed dispute resolution</li>
                <li><CheckIcon /> Integrated KYC / KYB / AML</li>
                <li><CheckIcon /> Founding rates locked permanently</li>
              </ul>
              <div className="mtrx-pricing-cta">
                <a href="/join" className="mtrx-btn-gold">Apply for Founding Access</a>
              </div>
              <p className="mtrx-pricing-note">Zero subscription fees for 90 days · Cancel anytime</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section className="mtrx-home-cta">
        <div className="mtrx-home-cta-glow" aria-hidden="true" />
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="mtrx-home-cta-inner">
              <span className="mtrx-sec-label">Founding Partner Programme</span>
              <h2 className="mtrx-home-cta-h2">
                Built for merchants ready<br /><em>to sell everywhere.</em>
              </h2>
              <p className="mtrx-home-cta-sub">
                Join the first cohort of merchants and partners building on MTRX. Founding access is strictly limited, and every application is subject to full compliance and due diligence review.
              </p>
              <div className="mtrx-home-cta-actions">
                <a href="/join" className="mtrx-btn-gold">Apply for Founding Access</a>
                <a href="/about" className="mtrx-btn-outline">Learn About Us</a>
              </div>
              <p className="mtrx-home-cta-note">Zero subscription fees for 90 days · Dedicated account manager · Locked founding tier pricing</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
