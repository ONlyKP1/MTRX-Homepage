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
    problem: 'Risk assessed by category, not conduct',
    pBody: 'Conventional providers score risk by sector. Once a category is labelled difficult, lawful and well run businesses within it are refused, offboarded, or quoted unworkable terms, regardless of their own record.',
    solution: 'Underwriting on verified conduct.',
    sBody: 'Every application is assessed on verified identity, compliance posture, and real processing data. Merchants are judged on their own record, never on assumptions about their sector.',
  },
  {
    problem: 'Commerce pushed beyond regulated oversight',
    pBody: 'Excluded businesses do not stop trading. They migrate to cash, informal arrangements, and offshore providers, taking transparency, consumer protection, and tax visibility with them.',
    solution: 'Lawful commerce kept inside the system.',
    sBody: 'Monitored, reported, and fully auditable payment flows bring underserved businesses into regulated view rather than pushing them outside it.',
  },
  {
    problem: 'Compliance that stalls onboarding',
    pBody: 'Manual KYB and KYC processes, weeks of correspondence, and ongoing AML obligations that consume resources without measurably reducing risk.',
    solution: 'Embedded compliance, automated end to end.',
    sBody: 'Business verification, identity checks, sanctions and PEP screening, and continuous AML monitoring run inside the core payment flow rather than bolted on beside it.',
  },
  {
    problem: 'Dependence on a single rail',
    pBody: 'When acceptance rests on one processor or one settlement rail, a single policy change or outage can halt a business entirely.',
    solution: 'Multi rail settlement by design.',
    sBody: 'Bank rails, open banking, and digital asset settlement operate as complementary primary rails. Routing adapts automatically to protect acceptance and resilience.',
  },
  {
    problem: 'Reserves set by sector assumption',
    pBody: 'Working capital withheld for months on the basis of what a business is, rather than what its actual settlement and dispute data shows.',
    solution: 'Performance based reserve logic.',
    sBody: 'Reserves are calculated dynamically against real chargeback and settlement performance, not sector wide averages.',
  },
  {
    problem: 'Disputes left undefended',
    pBody: 'Evidence gathering, deadline tracking, and filing are routinely left entirely to the merchant, with no structured support.',
    solution: 'Managed dispute resolution.',
    sBody: 'Evidence is packaged from live transaction data and filed before every deadline. Where automation reaches its limits, our disputes team reviews the case and represents the merchant position directly.',
  },
];

const txnFeed = [
  { from: 'GBP', crypto: 'USDC', to: 'GBP', amount: '£12,400.00', risk: 94, label: 'AML Clear',     status: 'Settled',  time: '2s' },
  { from: 'USD', crypto: 'ETH',  to: 'USD', amount: '$8,200.00',  risk: 87, label: 'KYC Verified', status: 'Approved', time: '5s' },
  { from: 'EUR', crypto: 'USDT', to: 'EUR', amount: '€45,000.00', risk: 91, label: 'PEP None',      status: 'Settled',  time: '9s' },
  { from: 'GBP', crypto: 'BTC',  to: 'GBP', amount: '£2,100.00',  risk: 79, label: 'KYB OK',        status: 'Approved', time: '14s' },
  { from: 'BTC', crypto: 'BTC',  to: 'GBP', amount: '£31,750.00', risk: 88, label: 'AML Clear',     status: 'Settled',  time: '21s' },
];

const tickerItems = ['KYB Verified', 'KYC Compliant', 'AML Monitored', 'PEP Screened', 'Sanctions Screened', 'Multiple Currencies', 'Open Banking', 'Stablecoin Settlement', 'Real Time Risk Scoring', 'Continuous Transaction Monitoring'];

const verticals = [
  { tag: 'Digital Content',    title: 'Content & Subscription Platforms', body: 'Digital content businesses and subscription platforms with recurring billing models, global audiences, and multi-currency exposure.',                            color: '59, 130, 246' },
  { tag: 'Creator Economy',    title: 'Creator Economy Businesses',       body: 'Independent creators, digital publishers, and educators monetising through memberships, one-time purchases, and digital products.',                              color: '20, 184, 166' },
  { tag: 'Commerce',           title: 'Online Marketplaces & E-commerce', body: 'Marketplaces and e-commerce merchants managing multi-party settlement, cross-border volume, and complex refund cycles.',                                        color: '99, 102, 241' },
  { tag: 'Health & Wellness',  title: 'Health & Wellness Merchants',      body: 'Compliant health and wellness brands with high repeat purchase volumes, global distribution, and evolving regulatory obligations.',                             color: '52, 211, 153' },
  { tag: 'Professional',       title: 'Professional Service Providers',   body: 'Service businesses requiring reliable recurring billing, structured settlement, and a payment partner that understands their operating model.',                 color: '168, 85, 247' },
  { tag: 'Regulated',          title: 'Regulated Merchants',              body: 'Regulated businesses that meet our compliance and due diligence requirements and need a technology first partner capable of serving them properly.',             color: '6, 182, 212' },
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
                <p className="mtrx-eyebrow">MTRX PAY Launching Q2 2026</p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={0.08}>
                <h1 className="mtrx-h1 mtrx-home-hero-h1 page-hero-h1">
                  Compliant payment<br />
                  infrastructure for<br />
                  <em>underserved digital businesses.</em>
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={0.16}>
                <p className="mtrx-hero-sub">
                  MTRX Pay is a compliance and risk engine wrapped around a payment platform. Automated onboarding, identity verification, transaction monitoring, and multi rail settlement in a single integration.<br /><br />
                  Risk assessed on conduct, not category. Compliance is the condition of service, not an afterthought.
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
          <p className="mtrx-metrics-disclaimer">
            Target platform metrics, pre-launch
          </p>
          <div className="mtrx-metrics-row">
            <AnimatedSection animation="fade-up" delay={0} className="mtrx-metric">
              <span className="mtrx-metric-num">
                <AnimatedCounter value={99.99} suffix="%" duration={1800} />
              </span>
              <span className="mtrx-metric-lbl">Uptime SLA</span>
            </AnimatedSection>
            <div className="mtrx-metric-divider" />
            <AnimatedSection animation="fade-up" delay={0.08} className="mtrx-metric">
              <span className="mtrx-metric-num">
                <AnimatedCounter value={50} suffix="+" duration={1400} />
              </span>
              <span className="mtrx-metric-lbl">Supported Assets</span>
            </AnimatedSection>
            <div className="mtrx-metric-divider" />
            <AnimatedSection animation="fade-up" delay={0.16} className="mtrx-metric">
              <span className="mtrx-metric-num"><AnimatedCounter value={99.98} suffix="%" duration={1800} /></span>
              <span className="mtrx-metric-lbl">Payment Success Rate</span>
            </AnimatedSection>
            <div className="mtrx-metric-divider" />
            <AnimatedSection animation="fade-up" delay={0.24} className="mtrx-metric">
              <span className="mtrx-metric-num">
                <AnimatedCounter value={140} suffix="+" duration={1600} />
              </span>
              <span className="mtrx-metric-lbl">Countries</span>
            </AnimatedSection>
            <div className="mtrx-metric-divider" />
            <AnimatedSection animation="fade-up" delay={0.32} className="mtrx-metric">
              <span className="mtrx-metric-num">0%</span>
              <span className="mtrx-metric-lbl">Chargeback Target</span>
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
              <p className="mtrx-sec-sub">The gap is not a lack of demand or legitimacy. It is a lack of infrastructure capable of serving these businesses compliantly and at scale. That is the gap MTRX closes.</p>
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
                  <h2 className="mtrx-h2">Built for legitimate businesses<br /><em>the old models overlook.</em></h2>
                  <p className="mtrx-sec-sub">We serve lawful businesses that are underserved by conventional acquirers because of categorical rather than conduct based risk classification. Every merchant undergoes a comprehensive onboarding and compliance assessment before a single transaction is processed.</p>
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
                <li><CheckIcon /> 50+ payment methods</li>
                <li><CheckIcon /> Dedicated account manager</li>
                <li><CheckIcon /> Managed dispute resolution</li>
                <li><CheckIcon /> Integrated KYC/KYB/AML</li>
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
                Built for merchants ready<br /><em>to scale properly.</em>
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
