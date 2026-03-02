import { AnimatedSection } from '../components/AnimatedSection';
import { JoinForm } from '../components/forms';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="rgba(197,164,78,.18)" />
    <polyline points="4.5 8.2 7 10.8 11.5 5.5" stroke="#C5A44E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const benefits = [
  { title: 'Zero subscription fees for 90 days',  sub: 'Full platform access. No monthly cost. Onboarding fee applies.' },
  { title: 'Priority onboarding review',           sub: 'Your application is reviewed first, with dedicated compliance support.' },
  { title: 'Dedicated account manager',            sub: 'A named person from day one. Direct line — no ticket queues.' },
  { title: 'Locked founding tier pricing',         sub: 'Your rates are fixed permanently, regardless of future changes.' },
  { title: 'Direct product input',                 sub: 'Your operational needs shape what we build and prioritise.' },
  { title: 'Early access to new payment rails',    sub: 'First to every new method before general availability.' },
];


const stats = [
  { num: '90',  suf: ' days', label: 'Zero subscription fees' },
  { num: 'Q2',  suf: ' 2026', label: 'Platform launch' },
  { num: '50',  suf: '+',     label: 'Payment methods' },
];

export function JoinPage() {
  return (
    <div className="mtrx-join">

      {/* ══════════ HERO ══════════ */}
      <section className="mjn-hero">
        <video
          className="mjn-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/join-hero.mp4" type="video/mp4" />
        </video>
        <div className="mjn-hero-overlay" aria-hidden="true" />
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="mjn-hero-inner">
              <span className="mjn-pill">Founding Partner Programme · Limited Places</span>
              <h1 className="mjn-hero-h1 page-hero-h1">
                Become a<br /><em>Founding Partner.</em>
              </h1>
              <p className="mjn-hero-sub">
                Join the first wave of merchants and partners building the future
                of compliant, structured payment infrastructure.
              </p>
              <a href="#apply" className="mtrx-btn-gold mjn-hero-cta">Apply for Founding Access ↓</a>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats strip at base of hero */}
        <div className="mjn-hero-stats">
          <div className="container">
            <div className="mjn-hero-stats-inner">
              {stats.map((s, i) => (
                <div key={i} className="mjn-hero-stat">
                  <span className="mjn-hero-stat-num">{s.num}<span className="mjn-hero-stat-suf">{s.suf}</span></span>
                  <span className="mjn-hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SPLIT: BENEFITS + FORM ══════════ */}
      <section className="mjn-split-section" id="apply">
        <div className="container">
          <div className="mjn-split-grid">

            {/* Left — benefits */}
            <AnimatedSection animation="fade-right" className="mjn-benefits-col">
              <div className="mjn-benefits-head">
                <h2 className="mjn-benefits-h2">
                  Founding access is<br /><em>strictly limited.</em>
                </h2>
                <p className="mjn-benefits-desc">
                  Be part of the first cohort building a new standard in payment approval, oversight, and controlled settlement.
                </p>
              </div>
              <ul className="mjn-benefits-list">
                {benefits.map((b, i) => (
                  <li key={i} className="mjn-benefit-item">
                    <span className="mjn-benefit-icon"><CheckIcon /></span>
                    <div className="mjn-benefit-text">
                      <span className="mjn-benefit-title">{b.title}</span>
                      <span className="mjn-benefit-sub">{b.sub}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mjn-benefits-footnote">* Onboarding cost remains applicable. Founding Partner subscription waiver applies for the first 90 days.</p>
            </AnimatedSection>

            {/* Right — form */}
            <AnimatedSection animation="fade-left" delay={0.12} className="mjn-form-col">
              <div className="mjn-form-card">
                <div className="mjn-form-card-head">
                  <h3 className="mjn-form-title">Apply Now</h3>
                </div>
                <div className="mjn-form-body">
                  <JoinForm />
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>


    </div>
  );
}
