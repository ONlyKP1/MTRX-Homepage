import { useState, useEffect, useRef } from 'react';
import { AnimatedSection, AnimatedCounter } from '../components/AnimatedSection';

const painPoints = [
  {
    problem: 'Accounts terminated overnight',
    pBody: 'Processors shut down merchants in specialist verticals without warning. Funds frozen, operations halted, no path to reinstatement.',
    solution: 'Dedicated rails. Contractual certainty.',
    sBody: 'MTRX operates isolated processing infrastructure per merchant. No shared risk pools. No guilt-by-association shutdowns.',
  },
  {
    problem: 'Cash locked in rolling reserves',
    pBody: 'Up to 15% of monthly volume withheld for 90+ days as standard, regardless of actual performance, history, or dispute data.',
    solution: 'Performance based reserve logic.',
    sBody: 'Reserves calculated dynamically against your real chargeback and settlement data, not industry wide assumptions.',
  },
  {
    problem: 'Chargebacks left undefended',
    pBody: 'Standard processors offer no dispute support. Evidence gathering, deadline tracking, and filing are left entirely to the merchant.',
    solution: 'Managed dispute resolution, automated and human led.',
    sBody: 'Evidence packaged from live transaction data and filed before every deadline. Where automation reaches its limits, our disputes team steps in directly, reviewing cases, engaging acquirers, and representing your position with the rigour of a dedicated compliance function.',
  },
  {
    problem: 'Declined on category alone',
    pBody: 'Applications rejected based on business type before a single data point is reviewed. No appeal process. No explanation given.',
    solution: 'Underwriting on real merchant data.',
    sBody: 'MTRX assesses applications on actual performance, compliance posture, and processing history. Never industry stereotypes.',
  },
  {
    problem: 'Compliance that stalls onboarding',
    pBody: 'Manual KYB/KYC processes, weeks of back and forth, and ongoing AML obligations that consume resources without adding value.',
    solution: 'End to end automated compliance.',
    sBody: 'KYB, KYC, AML monitoring, and PEP screening handled in a single automated flow. Onboarding in hours, not weeks.',
  },
  {
    problem: "Customers who can't pay",
    pBody: 'Narrow payment method support turns away international buyers, digital native customers, and anyone outside legacy banking rails.',
    solution: '50+ payment methods. Every customer.',
    sBody: 'Stablecoins, crypto, tokenised assets, open banking, card rails, and SWIFT/SEPA. All through one integration.',
  },
];

const txnFeed = [
  { from: 'GBP', crypto: 'USDC', to: 'GBP', amount: '£12,400.00', risk: 94, label: 'AML Clear',     status: 'Settled',  time: '2s' },
  { from: 'USD', crypto: 'ETH',  to: 'USD', amount: '$8,200.00',  risk: 87, label: 'KYC Verified', status: 'Approved', time: '5s' },
  { from: 'EUR', crypto: 'USDT', to: 'EUR', amount: '€45,000.00', risk: 91, label: 'PEP None',      status: 'Settled',  time: '9s' },
  { from: 'GBP', crypto: 'BTC',  to: 'GBP', amount: '£2,100.00',  risk: 79, label: 'KYB OK',        status: 'Approved', time: '14s' },
  { from: 'BTC', crypto: 'BTC',  to: 'GBP', amount: '£31,750.00', risk: 88, label: 'AML Clear',     status: 'Settled',  time: '21s' },
];

const tickerItems = ['KYB Verified', 'KYC Compliant', 'AML Monitored', 'PEP Screened', 'Multiple Currencies', 'Stablecoin Settlement', 'Tokenised Assets', 'Real Time Risk Scoring', 'Dynamic Settlement'];

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
    const t = setInterval(() => setVertIdx(i => (i + 1) % 11), 7000);
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
                <h1 className="mtrx-h1">
                  Accept Payments.<br />
                  Eliminate Chargebacks.<br />
                  <em>Approved Where Others Declined.</em>
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={0.16}>
                <p className="mtrx-hero-sub">
                  MTRX Pay is a compliant payment orchestration platform designed for merchants who need higher approval rates, structured onboarding, and controlled settlement.<br /><br />
                  Built with integrated KYC, AML monitoring, and intelligent risk controls from day one.
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
            Target platform metrics — pre-launch
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
              <p className="mtrx-sec-sub">Legacy payment infrastructure wasn't designed for every merchant. If you've been declined, terminated, or left without recourse, you already know the gap. MTRX closes it.</p>
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
        const verticals = [
          { tag: 'Digital Finance',    title: 'Digital Asset Platforms',      body: 'Crypto exchanges, Web3 applications, NFT marketplaces, and DeFi services operating at the intersection of technology and finance.',          color: '59, 130, 246' },
          { tag: 'Financial Markets',  title: 'FX & Trading Platforms',       body: 'Forex brokers, prop trading firms, and investment platforms requiring high-volume, cross-border payment infrastructure.',                       color: '16, 185, 129' },
          { tag: 'Wellness',           title: 'Botanical & Wellness Brands',  body: 'Plant-based wellness, hemp, and functional health brands navigating a complex but rapidly legitimising regulatory landscape.',                  color: '52, 211, 153' },
          { tag: 'Health Sciences',    title: 'Nutritional Sciences',         body: 'Supplement, nutraceutical, and functional health brands with high repeat purchase volumes and global distribution.',                            color: '168, 85, 247' },
          { tag: 'Entertainment',      title: 'Gaming & Entertainment',       body: 'Online gaming operators, skill-based entertainment platforms, and interactive media businesses with international player bases.',                color: '239, 68, 68' },
          { tag: 'Content',            title: 'Premium Content Platforms',    body: 'Subscription content platforms and creator-led businesses with recurring billing models and global audiences.',                                 color: '244, 114, 182' },
          { tag: 'Travel',             title: 'Travel & Hospitality',         body: 'OTAs, tour operators, and travel services with high average order values, complex refund cycles, and multi-currency exposure.',                 color: '6, 182, 212' },
          { tag: 'Commerce',           title: 'Subscription Commerce',        body: 'SaaS, membership, and subscription businesses requiring reliable recurring billing across multiple currencies and jurisdictions.',               color: '99, 102, 241' },
          { tag: 'Lifestyle',          title: 'Companion & Social Platforms', body: 'Relationship-economy platforms and social connection services operating in the personal companionship and lifestyle space.',                    color: '251, 146, 60' },
          { tag: 'Education',          title: 'Course Sellers & EdTech',      body: 'Online educators, digital course creators, and learning platforms monetising through one-time purchases, cohorts, or subscriptions.',          color: '234, 179, 8' },
          { tag: 'Creator Economy',    title: 'Independent Content Creators', body: 'Influencers, digital publishers, and independent creators monetising through memberships, tips, and exclusive digital products.',               color: '20, 184, 166' },
        ];
        return (
          <section className="mtrx-verticals-section">
            <div className="container">
              <AnimatedSection animation="fade-up">
                <div className="mtrx-sec-head">
                  <span className="mtrx-sec-label">Who We Serve</span>
                  <h2 className="mtrx-h2">Built for the verticals traditional<br /><em>banking ignores.</em></h2>
                  <p className="mtrx-sec-sub">MTRX specialises in sectors where conventional processors decline, restrict, or exit without notice. We call them specialist verticals — and we've built our entire infrastructure around them.</p>
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
                  <button className="mtrx-carousel-arrow" onClick={() => setVertIdx(i => (i - 1 + 11) % 11)} aria-label="Previous">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                  </button>
                  <div className="mtrx-carousel-dots">
                    {verticals.map((_, i) => (
                      <button key={i} className={`mtrx-carousel-dot${i === vertIdx ? ' active' : ''}`} onClick={() => setVertIdx(i)} aria-label={`Go to slide ${i + 1}`} />
                    ))}
                  </div>
                  <button className="mtrx-carousel-arrow" onClick={() => setVertIdx(i => (i + 1) % 11)} aria-label="Next">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

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
                Join the first cohort of merchants and partners building on MTRX. Founding access is strictly limited — secure your place before standard terms apply.
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
