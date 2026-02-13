import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionHeader } from '../components/common';
import { pricingTiers, pricingNotes } from '../data/pricing';

export function ProductPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="section section-navy hero hero-short">
        <div className="container">
          <div className="hero-content" style={{ textAlign: 'center' }}>
            <span className="hero-tag">Product Proposition</span>
            <h1 className="hero-title animate-hero">
              Payment Processing That Works for Your Business
            </h1>
            <p className="hero-subtitle animate-hero-delayed">
              We approve 99.99% of legitimate businesses. The processors that rejected you? They
              are the anomaly, not you.
            </p>
            <div className="hero-cta animate-hero-delayed-2">
              <a href="#pricing" className="btn btn-primary btn-animated">
                View Pricing
              </a>
              <Link to="/#early-access" className="btn btn-outline btn-animated">
                Register Interest
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Platform Overview */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            heading="One Platform, Complete Payment Infrastructure"
            body="Everything you need to accept, process, and manage payments — built on modern technology with institutional-grade security."
          />
          <div className="feature-grid">
            <AnimatedSection delay={0}>
              <div className="feature-item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <h4>Multi-Rail Processing</h4>
                <p>
                  Card networks, bank transfers, and alternative payment methods through a single
                  integration
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="feature-item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <h4>Universal Acceptance</h4>
                <p>
                  We say yes to legitimate businesses. Your industry doesn't define your access to
                  payments.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="feature-item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
                <h4>Transparent Pricing</h4>
                <p>
                  Tiered pricing that rewards growth. No hidden fees, no surprise charges.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="feature-item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h4>Built-In Compliance</h4>
                <p>
                  Automated KYC/KYB, transaction monitoring, and regulatory reporting
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="feature-item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
                <h4>Real-Time Dashboard</h4>
                <p>
                  Complete visibility into transactions, settlements, and business analytics
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="feature-item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <h4>Developer-First API</h4>
                <p>
                  RESTful APIs, webhooks, SDKs, and comprehensive documentation
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Merchant Solutions */}
      <section className="section section-gray">
        <div className="container">
          <div className="split-section">
            <AnimatedSection animation="fade-right">
              <h2>Merchant Solutions</h2>
              <p>
                Whether you're a startup processing your first transactions or an enterprise
                handling millions monthly, our platform scales with you.
              </p>
              <ul className="check-list">
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Streamlined onboarding in days, not weeks
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Multi-currency processing across 30+ currencies
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Smart routing for optimised acceptance rates
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Real-time transaction monitoring and alerts
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Comprehensive dispute management
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Full API integration with developer documentation
                </li>
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={0.2}>
              <div
                className="abstract-card"
                style={{
                  background: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 100%)',
                  borderRadius: '16px',
                  padding: '2.5rem',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '360px',
                }}
              >
                <svg
                  width="200"
                  height="160"
                  viewBox="0 0 200 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="10" y="120" width="24" height="30" rx="4" fill="#c9a84c" opacity="0.8" />
                  <rect x="44" y="90" width="24" height="60" rx="4" fill="#c9a84c" opacity="0.85" />
                  <rect x="78" y="60" width="24" height="90" rx="4" fill="#c9a84c" opacity="0.9" />
                  <rect x="112" y="40" width="24" height="110" rx="4" fill="#c9a84c" opacity="0.95" />
                  <rect x="146" y="20" width="24" height="130" rx="4" fill="#c9a84c" />
                  <line x1="10" y1="155" x2="180" y2="155" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
                  <polyline
                    points="22,115 56,85 90,55 124,35 158,15"
                    stroke="#ffffff"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p
                  style={{
                    color: '#ffffff',
                    textAlign: 'center',
                    marginTop: '1.5rem',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    opacity: 0.9,
                  }}
                >
                  Merchant Dashboard
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4: Customer Benefits */}
      <section className="section section-navy">
        <div className="container">
          <SectionHeader
            dark={true}
            heading="Built for Customer Trust"
            body="Your customers deserve a seamless, secure payment experience. Our platform delivers."
          />
          <div className="grid-2">
            <AnimatedSection delay={0}>
              <div className="benefit-card">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <h3 style={{ color: '#c9a84c' }}>Fast Checkout</h3>
                <p style={{ color: '#e5e7eb' }}>
                  Optimised payment flows that reduce cart abandonment and maximise conversion
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="benefit-card">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                <h3 style={{ color: '#c9a84c' }}>Flexible Payment Methods</h3>
                <p style={{ color: '#e5e7eb' }}>
                  Cards, bank transfers, digital wallets, and alternative payment methods
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="benefit-card">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <h3 style={{ color: '#c9a84c' }}>Full Transparency</h3>
                <p style={{ color: '#e5e7eb' }}>
                  Clear transaction records and real-time payment status for your customers
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="benefit-card">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                <h3 style={{ color: '#c9a84c' }}>Security First</h3>
                <p style={{ color: '#e5e7eb' }}>
                  PCI DSS Level 1 compliance and advanced fraud protection on every transaction
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 5: Pricing Table */}
      <section id="pricing" className="section section-white">
        <div className="container">
          <SectionHeader
            heading="Transparent Pricing That Grows With You"
            body="Simple, competitive pricing with no hidden fees. Choose the tier that matches your business."
          />
          <AnimatedSection animation="fade-up">
            <div className="pricing-table">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`pricing-column${tier.featured ? ' pricing-featured' : ''}`}
                >
                  {tier.featured && <span className="pricing-badge">Recommended</span>}
                  <div className="pricing-header">
                    <h3>{tier.name}</h3>
                    <p>{tier.bestFor}</p>
                  </div>
                  <div className="pricing-highlight">
                    <span>{tier.transactionFee}</span>
                  </div>
                  <div className="pricing-details">
                    <div className="pricing-row">
                      <span>Monthly Volume</span>
                      <span>{tier.monthlyVolume}</span>
                    </div>
                    <div className="pricing-row">
                      <span>Monthly Fee</span>
                      <span>{tier.monthlyFee}</span>
                    </div>
                    <div className="pricing-row">
                      <span>Chargeback Reserve</span>
                      <span>{tier.chargebackReserve}</span>
                    </div>
                    <div className="pricing-row">
                      <span>Settlement</span>
                      <span>{tier.settlement}</span>
                    </div>
                    <div className="pricing-row">
                      <span>Dedicated Manager</span>
                      <span>{tier.dedicatedManager}</span>
                    </div>
                  </div>
                  <div className="pricing-footer">
                    <Link
                      to="/#early-access"
                      className={`btn ${tier.featured ? 'btn-primary' : 'btn-outline'} btn-animated`}
                    >
                      Register Interest
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="pricing-notes">
              {pricingNotes.map((note, index) => (
                <span key={index} className="pricing-note">
                  &bull; {note}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6: Technology & Security */}
      <section className="section section-gray">
        <div className="container">
          <SectionHeader
            heading="Enterprise-Grade Infrastructure"
            body="We work with industry-leading technology and compliance partners to deliver a platform you can trust."
          />
          <div className="partner-grid">
            <AnimatedSection delay={0}>
              <span className="partner-badge">Card Schemes</span>
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <span className="partner-badge">Acquiring Banks</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <span className="partner-badge">Fraud Prevention</span>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <span className="partner-badge">Compliance Technology</span>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <span className="partner-badge">Cloud Infrastructure</span>
            </AnimatedSection>
            <AnimatedSection delay={0.25}>
              <span className="partner-badge">Data Analytics</span>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <span className="partner-badge">Payment Gateways</span>
            </AnimatedSection>
            <AnimatedSection delay={0.35}>
              <span className="partner-badge">Banking Partners</span>
            </AnimatedSection>
          </div>
          <p style={{ textAlign: 'center', marginTop: '2.5rem', fontWeight: 600 }}>
            Always-On Processing. Every Transaction Type. Every Time.
          </p>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="section section-blue">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <h2 style={{ color: '#ffffff' }}>
              Take the Uncertainty Out of Payment Processing
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p style={{ color: '#ffffff' }}>
              Join the businesses who are choosing a payment processor that works with them, not
              against them.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Link to="/#early-access" className="btn btn-gold btn-animated">
              Request Early Access
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
