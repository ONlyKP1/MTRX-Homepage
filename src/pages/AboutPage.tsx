import { AnimatedSection, AnimatedCounter } from '../components/AnimatedSection';
import { EarlyAccessForm } from '../components/forms';

export function AboutPage() {
  return (
    <div className="mtrx-about">

      {/* ══════════════════════════════════════════════════════════════
          [1] HERO — Full-viewport video background, massive headline
      ══════════════════════════════════════════════════════════════ */}
      <section className="mab-hero">
        <div className="mab-hero-overlay" aria-hidden="true" />
        <div className="mab-hero-content">
          <AnimatedSection animation="fade-up">
            <span className="mtrx-sec-label">About MTRX PAY</span>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={0.15}>
            <h1 className="mtrx-h1 mab-hero-h1">
              Infrastructure for<br />
              <em>merchants the system failed.</em>
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={0.28}>
            <p className="mab-hero-sub">
              Institutional grade compliance. Human first advocacy. Built for the
              verticals that legacy processors refuse to serve.
            </p>
          </AnimatedSection>
        </div>
        <div className="mab-hero-scroll" aria-hidden="true">
          <span className="mab-hero-scroll-line" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          [2] PULL QUOTE
      ══════════════════════════════════════════════════════════════ */}
      <section className="mab-quote">
        <AnimatedSection animation="fade-up">
          <blockquote className="mab-quote-text">
            "Every legitimate business deserves payment infrastructure
            that works — not payment infrastructure that tolerates them."
          </blockquote>
          <cite className="mab-quote-cite">MTRX PAY — Company Mission</cite>
        </AnimatedSection>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          [3] STATS
      ══════════════════════════════════════════════════════════════ */}
      <section className="mab-stats">
        <div className="container">
          <div className="mab-stats-grid">
            {[
              { value: 50,  suffix: '+',   label: 'Payment Methods',          sub: 'Cards, crypto, open banking, SWIFT & SEPA' },
              { value: 99,  suffix: '.9%', label: 'Platform Uptime',          sub: 'Guaranteed SLA across all merchant rails' },
              { value: 90,  suffix: 'd',   label: 'Founding Partner Window',  sub: 'Zero subscription fees for early members' },
              { value: 24,  suffix: '/7',  label: 'Dedicated Support',        sub: 'Human first, not helpdesk tickets' },
            ].map((stat, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.09}>
                <div className="mab-stat">
                  <div className="mab-stat-number">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1800} />
                  </div>
                  <div className="mab-stat-label">{stat.label}</div>
                  <div className="mab-stat-sub">{stat.sub}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          [4] VALUES
      ══════════════════════════════════════════════════════════════ */}
      <section className="mab-values">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="mtrx-sec-head">
              <span className="mtrx-sec-label">What We Stand For</span>
              <h2 className="mtrx-h2">The principles behind<br /><em>every decision we make.</em></h2>
            </div>
          </AnimatedSection>
          <div className="mab-values-grid">
            {[
              { num: '01', title: 'Merchant First',        body: 'Every decision starts with one question: does this serve our merchants better? We measure our success entirely by the success of the businesses we serve.' },
              { num: '02', title: 'Radical Transparency',  body: 'Clear pricing, documented processes, honest communication at every step. No hidden fees, no black-box decisions, no surprises — ever.' },
              { num: '03', title: 'Technology Led',        body: 'Modern infrastructure and intelligent risk assessment solve the problems legacy processors avoid. We continuously improve against real merchant data.' },
              { num: '04', title: 'Inclusive by Design',   body: 'Legitimate businesses in every industry deserve access to payment infrastructure. Your vertical should never determine your access to financial services.' },
            ].map((v, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.07}>
                <div className="mab-value-card">
                  <span className="mab-value-num">{v.num}</span>
                  <div className="mab-value-divider" aria-hidden="true" />
                  <h3 className="mab-value-title">{v.title}</h3>
                  <p className="mab-value-body">{v.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          [5] HOW WE WORK
      ══════════════════════════════════════════════════════════════ */}
      <section className="mab-approach">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="mab-approach-head">
              <span className="mtrx-sec-label">How We Work</span>
              <h2 className="mtrx-h2 mtrx-left">Infrastructure built on<br /><em>three core pillars.</em></h2>
            </div>
          </AnimatedSection>
          <div className="mab-pillars">
            {[
              { num: '01', title: 'Regulatory Compliance', body: "We don't just meet regulatory requirements — we exceed them. Our compliance framework is designed to give regulators confidence and merchants absolute peace of mind." },
              { num: '02', title: 'Modern Technology',     body: 'API first infrastructure engineered for reliability, security, and rapid iteration. Your integration is built to last, not to be renegotiated every 18 months.' },
              { num: '03', title: 'Partnership Model',     body: 'We work alongside acquiring banks, card schemes, and technology partners who share our vision of inclusive, reliable payment processing for specialist merchants.' },
            ].map((p, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.1}>
                <div className="mab-pillar">
                  <span className="mab-pillar-num" aria-hidden="true">{p.num}</span>
                  <h3 className="mab-pillar-title">{p.title}</h3>
                  <p className="mab-pillar-body">{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          [6] TEAM
      ══════════════════════════════════════════════════════════════ */}
      <section className="mab-team">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="mtrx-sec-head">
              <span className="mtrx-sec-label">Leadership</span>
              <h2 className="mtrx-h2">Built by people who've<br /><em>lived the problem.</em></h2>
              <p className="mtrx-sec-sub">Our team brings decades of experience across payments, fintech, compliance, and enterprise technology. Full profiles coming soon.</p>
            </div>
          </AnimatedSection>
          <div className="mab-team-grid">
            {[0, 1, 2, 3].map(i => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.08}>
                <div className="mab-team-card">
                  <div className="mab-team-photo" aria-hidden="true">
                    <div className="mab-team-photo-inner" />
                  </div>
                  <div className="mab-team-info">
                    <span className="mab-team-coming">Profile Forthcoming</span>
                    <span className="mab-team-role">Leadership</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          [7] CTA
      ══════════════════════════════════════════════════════════════ */}
      <section id="early-access" className="mab-cta">
        <div className="mab-cta-glow" aria-hidden="true" />
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="mab-cta-head">
              <span className="mtrx-sec-label">Founding Partner Programme</span>
              <h2 className="mtrx-h2">Become a<br /><em>Founding Partner.</em></h2>
              <p className="mab-cta-sub">A limited number of places are available. Founding Partners receive zero subscription fees for the first 90 days, priority onboarding, and a dedicated account manager from day one.</p>
              <p className="mab-cta-footnote">*Onboarding cost remains applicable.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={0.18}>
            <div className="mab-cta-form">
              <EarlyAccessForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
