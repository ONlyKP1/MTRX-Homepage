import { AnimatedSection } from '../components/AnimatedSection';

const modules = [
  {
    num: '01',
    label: 'Payment Orchestration',
    title: 'Multi-Rail Routing Engine',
    body: 'Intelligent routing logic selects the optimal processor for every transaction, maximising acceptance rates and minimising processing cost automatically. No switching, no downtime, no re-integration.',
    points: ['Smart failover across redundant rails', 'Cost optimisation per transaction', 'Real-time processor health monitoring', 'Automatic retry logic on decline'],
  },
  {
    num: '02',
    label: 'Risk Intelligence',
    title: 'Proprietary Risk Scoring',
    body: 'Every transaction is scored in real time by our in-house risk engine. Scores surface directly to customers at the point of purchase, turning risk transparency into a measurable conversion advantage.',
    points: ['Sub-100ms scoring on every payment', 'Merchant-specific risk calibration', 'Customer-facing trust signal display', 'Continuous model improvement from live data'],
  },
  {
    num: '03',
    label: 'Compliance Automation',
    title: 'KYB / KYC / AML / PEP',
    body: 'Full compliance in one automated flow. Business verification, identity checks, sanctions screening, and PEP detection, all gated before a single transaction is processed.',
    points: ['Automated director and UBO verification', 'Liveness checks and document scanning', 'Continuous AML transaction monitoring', 'Global PEP and sanctions screening'],
  },
  {
    num: '04',
    label: 'Wallet Infrastructure',
    title: 'Secured Merchant Wallet Layer',
    body: 'We create dedicated, secured and insured wallets for every merchant we onboard. Each wallet supports multi-asset balances with real-time monitoring, configurable sweep rules, reserve thresholds, and automated settlement, all managed through a single API.',
    points: ['Dedicated merchant wallets, secured and insured', 'Multi-asset balance monitoring in real time', 'Configurable sweep and reserve logic', 'Automated settlement triggers'],
  },
  {
    num: '05',
    label: 'Dispute Management',
    title: 'Dynamic Dispute Logic',
    body: 'Evidence collection, configurable response rules, and real-time dashboards. Systematic protection of your dispute win rate at every stage, from first notification to final resolution.',
    points: ['Automated evidence packaging from live data', 'Configurable win rules by industry and ticket size', 'Deadline tracking with zero manual input', 'Win rate analytics and trend alerts'],
  },
  {
    num: '06',
    label: 'Settlement',
    title: 'Payout Orchestration',
    body: 'Flexible settlement to bank accounts, crypto wallets, or stablecoin addresses. Every payout is configurable, automated, and fully auditable with payout rules by merchant tier, geography, and volume.',
    points: ['Bank, crypto, and stablecoin settlement', 'Payout rules by tier and geography', 'Real-time payout status and audit trail', 'Multi-currency conversion at settlement'],
  },
];

const rails = [
  { name: 'Cryptocurrency',  detail: 'BTC, ETH and 50+ assets',     icon: '₿' },
  { name: 'Stablecoins',     detail: 'USDC, USDT, EURC and more',   icon: '$' },
  { name: 'Tokenisation',    detail: 'Real world asset settlement',  icon: '◈' },
  { name: 'Card Rails',      detail: 'Visa, Mastercard, UnionPay',   icon: '▣' },
  { name: 'Open Banking',    detail: 'Direct account to account',    icon: '⇄' },
  { name: 'SWIFT / SEPA',   detail: 'Cross-border wire settlement', icon: '⟁' },
];

const stack = [
  { label: 'Uptime SLA',          val: '99.9%' },
  { label: 'Scoring Latency',     val: '<100ms' },
  { label: 'Payment Methods',     val: '50+' },
  { label: 'Supported Currencies', val: '30+' },
  { label: 'API Endpoints',       val: 'REST' },
  { label: 'Settlement Formats',  val: 'Fiat + Crypto' },
];

export function TechnologyPage() {
  return (
    <div className="mtrx-tech">

      {/* ══════════ HERO ══════════ */}
      <section className="mtech-hero">
        <video className="mtech-hero-video" autoPlay muted loop playsInline preload="metadata">
          <source src="/tech-hero.mp4" type="video/mp4" />
        </video>
        <div className="mtech-hero-overlay" aria-hidden="true" />
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="mtech-hero-inner">
              <h1 className="mtrx-h1 mtech-hero-h1 page-hero-h1">
                Infrastructure built for<br />
                <em>precision at every layer.</em>
              </h1>
              <p className="mtech-hero-sub">
                Six integrated modules. One API. Complete visibility from onboarding
                through settlement for every merchant we serve.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════ PLATFORM STATS BAR ══════════ */}
      <div className="mtech-stats-bar">
        <div className="container">
          <div className="mtech-stats-inner">
            {stack.map((s, i) => (
              <div className="mtech-stat" key={i}>
                <span className="mtech-stat-val">{s.val}</span>
                <span className="mtech-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ MODULES ══════════ */}
      <section className="mtech-modules">
        <div className="container">
          {modules.map((m, i) => (
            <AnimatedSection key={i} animation="fade-up" delay={0.05}>
              <div className={`mtech-module${i % 2 === 1 ? ' mtech-module-alt' : ''}`}>
                <div className="mtech-module-copy">
                  <span className="mtech-module-num">{m.num}</span>
                  <span className="mtech-module-label">{m.label}</span>
                  <h2 className="mtech-module-title">{m.title}</h2>
                  <p className="mtech-module-body">{m.body}</p>
                  <ul className="mtech-module-points">
                    {m.points.map((p, j) => (
                      <li key={j} className="mtech-module-point">
                        <span className="mtech-point-dot" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mtech-module-visual">
                  <div className="mtech-module-card">
                    <span className="mtech-card-num">{m.num}</span>
                    <span className="mtech-card-title">{m.title}</span>
                    <div className="mtech-card-divider" />
                    <ul className="mtech-card-points">
                      {m.points.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ══════════ PAYMENT RAILS ══════════ */}
      <section className="mtech-rails">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="mtrx-sec-head">
              <span className="mtrx-sec-label">Payment Rails</span>
              <h2 className="mtrx-h2">Every payment type.<br /><em>One integration.</em></h2>
              <p className="mtrx-sec-sub">New rails are added centrally. Merchants never need to re-integrate.</p>
            </div>
          </AnimatedSection>
          <div className="mtech-rails-grid">
            {rails.map((r, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.07}>
                <div className="mtech-rail-card">
                  <span className="mtech-rail-icon">{r.icon}</span>
                  <span className="mtech-rail-name">{r.name}</span>
                  <span className="mtech-rail-detail">{r.detail}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ API CTA ══════════ */}
      <section className="mtech-cta">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="mtech-cta-inner">
              <span className="mtrx-sec-label">Get Started</span>
              <h2 className="mtech-cta-h2">Ready to integrate?</h2>
              <p className="mtech-cta-sub">Apply for Founding Partner access and get direct onboarding support from our team.</p>
              <a href="/join" className="mtrx-btn-gold">Apply for Access</a>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
