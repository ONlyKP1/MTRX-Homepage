import { AnimatedSection, AnimatedCounter } from '../components/AnimatedSection';

export function AboutPage() {
  return (
    <div className="mtrx-about">

      {/* ══════════════════════════════════════════════════════════════
          [1] HERO — Full-viewport video background, massive headline
      ══════════════════════════════════════════════════════════════ */}
      <section className="mab-hero">
        <video className="mab-hero-video" autoPlay muted loop playsInline preload="auto">
          <source src="/about-hero.mp4" type="video/mp4" />
        </video>
        <div className="mab-hero-overlay" aria-hidden="true" />
        <div className="mab-hero-content">
          <AnimatedSection animation="fade-up">
            <span className="mtrx-sec-label">About MTRX PAY</span>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={0.15}>
            <h1 className="mtrx-h1 mab-hero-h1 page-hero-h1">
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
            <span className="mab-quote-mark">&ldquo;</span>Powering the next economy with secure, intelligent payment infrastructure.<span className="mab-quote-mark">&rdquo;</span>
          </blockquote>
          <cite className="mab-quote-cite">MTRX PAY Company Mission</cite>
        </AnimatedSection>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          [3] STATS
      ══════════════════════════════════════════════════════════════ */}
      <section className="mab-stats">
        <div className="container">
          <div className="mab-stats-grid">
            {[
              { value: 10,  suffix: '+',   label: 'Payment Methods',           sub: 'Cards, crypto, open banking, SWIFT & SEPA' },
              { value: 99,  suffix: '.99%', label: 'Platform Uptime',          sub: 'Guaranteed SLA across all merchant rails' },
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
              { num: '02', title: 'Radical Transparency',  body: 'Clear pricing, documented processes, honest communication at every step. No hidden fees, no black-box decisions, no surprises, ever.' },
              { num: '03', title: 'Technology Led',        body: 'Modern infrastructure and intelligent risk assessment solve the problems legacy processors avoid. We continuously improve against real merchant data.' },
              { num: '04', title: 'Inclusive by Design',   body: 'Legitimate businesses in every industry deserve access to payment infrastructure. Your vertical should never determine your access to financial services.' },
            ].map((v, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.07}>
                <div className="mab-value-card">
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
              { num: '01', title: 'Regulatory Compliance', body: "We don't just meet regulatory requirements, we exceed them. Our compliance framework is designed to give regulators confidence and merchants absolute peace of mind." },
              { num: '02', title: 'Modern Technology',     body: 'API first infrastructure engineered for reliability, security, and rapid iteration. Your integration is built to last, not to be renegotiated every 18 months.' },
              { num: '03', title: 'Partnership Model',     body: 'We work alongside acquiring banks, card schemes, and technology partners who share our vision of inclusive, reliable payment processing for specialist merchants.' },
            ].map((p, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.08}>
                <div className="mab-pillar">
                  <h3 className="mab-pillar-title">{p.title}</h3>
                  <p className="mab-pillar-body">{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          [6] FOUNDER
      ══════════════════════════════════════════════════════════════ */}
      <section className="mab-founder">
        <div className="container">
          <div className="mab-founder-layout">

            {/* LEFT — sticky identity */}
            <AnimatedSection animation="fade-up">
              <div className="mab-founder-sidebar">
                <span className="mtrx-sec-label">From the Founder</span>
                <div className="mab-founder-meta">
                  <span className="mab-founder-name">Peter Watt</span>
                  <span className="mab-founder-role">Founder</span>
                </div>
                <div className="mab-founder-sig" aria-hidden="true">PW</div>
              </div>
            </AnimatedSection>

            {/* RIGHT — letter */}
            <AnimatedSection animation="fade-up" delay={0.12}>
              <div className="mab-founder-letter">
                <span className="mab-founder-quote-mark" aria-hidden="true">"</span>
                <p>Over the years, I've built businesses in sectors that traditional banks and payment processors struggle to understand.</p>
                <p className="mab-founder-pull">I've seen accounts restricted without warning. Funds held during critical growth phases.</p>
                <p>It forces you to realise something quickly:</p>
                <p className="mab-founder-emphasis">If you don't control your infrastructure,<br />you don't control your future.</p>
                <p>When I began working in emerging digital markets, it became clear that the payment layer was the weakest point. The sectors moving fastest were being supported by rails built for yesterday's economy.</p>
                <p>So instead of looking for another workaround, I decided to build properly.</p>
                <p>I partnered with Keiran, a technical product specialist, and we began architecting our own backend from the ground up. Not a reseller model. Not a fragile overlay. But real infrastructure, designed with intelligent onboarding, structured risk controls, dynamic settlement logic, and long-term scalability built in from day one.</p>
                <p>Wayne believed in that vision early. His support and belief in the scale of what we were building helped shape MTRX's foundation.</p>
                <p className="mab-founder-pull">MTRX isn't a reaction. It's a deliberate move toward independence.</p>
                <p>Emerging markets aren't going away. They're expanding. And they require infrastructure that understands their velocity, complexity, and regulatory pressure, without collapsing under it.</p>
                <p>We're building MTRX because the next generation of commerce deserves stronger rails.</p>
                <div className="mab-founder-closing">
                  <span>Built by operators.</span>
                  <span>Engineered by specialists.</span>
                  <span>Designed for scale.</span>
                </div>
              </div>
            </AnimatedSection>

          </div>

          {/* KEIRAN PERKINS */}
          <div className="mab-founder-layout mab-founder-layout-2">

            <AnimatedSection animation="fade-up">
              <div className="mab-founder-sidebar">
                <span className="mtrx-sec-label">Co-Founder</span>
                <div className="mab-founder-meta">
                  <span className="mab-founder-name">Keiran Perkins</span>
                  <span className="mab-founder-role">Co-Founder</span>
                </div>
                <div className="mab-founder-sig" aria-hidden="true">KP</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.12}>
              <div className="mab-founder-letter">
                <span className="mab-founder-quote-mark" aria-hidden="true">"</span>
                <p>I joined MTRX Pay because I saw the struggle up close. Peter's frustration with how high-risk merchants were sidelined sparked a fire in me. With a deep background in technology, I've spent years building solutions that bridge complexity and customer needs. This wasn't just another project, it was a mission.</p>
                <p className="mab-founder-pull">I've always believed that technology is at its best when it's invisible, working seamlessly behind the scenes so customers can thrive.</p>
                <p>That's exactly how we've shaped MTRX Pay. Every piece of the platform is engineered with both precision and empathy. We're here because technology, when done right, ensures no merchant is left without a path to success. My journey from building products to now reshaping high-risk payments is about making sure every merchant gets the tools they deserve.</p>
                <p>Operationally, we stand alongside our merchants every step of the way. That means real people, real support, and 24/7 availability when it matters most. Payments don't sleep, and neither does responsibility, so our commitment goes beyond the platform itself.</p>
                <p>We combine human support with disciplined operational oversight to ensure our merchants always feel backed, protected, and understood.</p>
                <p className="mab-founder-emphasis">At the same time, we pledge to remain on the cutting edge of technology, continually innovating and evolving so our partners benefit from the most advanced, secure, and forward-thinking payment infrastructure available.</p>
              </div>
            </AnimatedSection>

          </div>

          {/* WAYNE DANIEL */}
          <div className="mab-founder-layout mab-founder-layout-2">

            <AnimatedSection animation="fade-up">
              <div className="mab-founder-sidebar">
                <span className="mtrx-sec-label">Co-Founder</span>
                <div className="mab-founder-meta">
                  <span className="mab-founder-name">Wayne Daniel</span>
                  <span className="mab-founder-role">Co-Founder</span>
                </div>
                <div className="mab-founder-sig" aria-hidden="true">WD</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.12}>
              <div className="mab-founder-letter">
                <span className="mab-founder-quote-mark" aria-hidden="true">"</span>
                <p>I joined MTRX Pay because I believed in what Peter and Keiran were building from the beginning. I've spent years working in marketing and brand leadership, helping businesses communicate clearly, grow responsibly, and build trust in complex environments. When I saw the vision for MTRX, real infrastructure built properly, not another workaround, I knew it needed to be positioned with the same level of care and discipline as the technology behind it.</p>
                <p className="mab-founder-pull">My role is to ensure that how we present ourselves reflects who we are: measured, credible, and aligned with regulatory expectations.</p>
                <p>In markets where scrutiny is high and trust is everything, communication cannot be exaggerated or reactive, it must be accurate, responsible, and consistent.</p>
                <p>Working alongside Peter and Keiran, I focus on bringing cohesion to our message, ensuring that product, operations, and market presence move in step. Innovation is important, but so is restraint. Growth matters, but so does compliance. My responsibility is to help make sure MTRX stands confidently at the edge of innovation while remaining grounded in transparency and accountability.</p>
                <div className="mab-founder-closing">
                  <span>We're not here to create noise.</span>
                  <span className="mab-founder-emphasis-inline">We're here to build belief.</span>
                </div>
              </div>
            </AnimatedSection>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          [7] CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className="mab-cta">
        <div className="mab-cta-glow" aria-hidden="true" />
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="mab-cta-head">
              <span className="mtrx-sec-label">Founding Partner Programme</span>
              <h2 className="mtrx-h2">Become a<br /><em>Founding Partner.</em></h2>
              <p className="mab-cta-sub">A limited number of places are available. Founding Partners receive zero subscription fees for the first 90 days, priority onboarding, and a dedicated account manager from day one.</p>
              <a href="/join" className="mtrx-btn-gold mab-cta-btn">Apply for Founding Access</a>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
