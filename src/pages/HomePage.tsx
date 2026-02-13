import { useState, useEffect, useRef } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button, SectionHeader } from '../components/common';
import { EarlyAccessForm } from '../components/forms';

/* ------------------------------------------------------------------ */
/*  Section 1 — Hero (Who are we)                                      */
/* ------------------------------------------------------------------ */
function HeroSection() {
  const scrollToFounders = () => {
    const target = document.getElementById('founders-club');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="section hero hero-split hero-light">
      <div className="container">
        <div className="hero-split-layout">
          <div className="hero-content hero-content--left">
            <h1 className="hero-title animate-hero">
              Payment Orchestration<br />
              for <span>Complex Money</span>
            </h1>

            <p className="hero-subtitle animate-hero">
              Route transactions intelligently across providers, currencies, and payment types —
              built for businesses traditional processors can't serve.
            </p>

            <div className="hero-cta animate-hero">
              <Button variant="gold" onClick={scrollToFounders}>
                Request Access
              </Button>
            </div>
          </div>

          <div className="hero-image animate-hero">
            <div className="hero-image-wrapper">
              {/* Live badge */}
              <div className="hero-live-badge">
                <span className="live-dot"></span>
                LIVE
              </div>

              {/* Floating notification */}
              <div className="hero-notification">
                <div className="notification-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6FAE9A" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="notification-content">
                  <span className="notification-title">Payment Approved</span>
                  <span className="notification-subtitle">MTRX Pay</span>
                </div>
                <span className="notification-amount">+$4,250.00</span>
              </div>

              <img src="/dashboard.png" alt="MTRX PAY Dashboard" />

              {/* Stats bar */}
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-label">VOLUME</span>
                  <span className="stat-value">$689,201</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-label">TRANSACTIONS</span>
                  <span className="stat-value">2,847</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-label">SUCCESS</span>
                  <span className="stat-value">92.4%</span>
                </div>
              </div>
            </div>

            {/* Subtle floating dots */}
            <div className="hero-dots-subtle">
              <span></span><span></span><span></span>
            </div>

            {/* Extra floating particles */}
            <div className="hero-particles">
              <span className="particle particle-1"></span>
              <span className="particle particle-2"></span>
              <span className="particle particle-3"></span>
              <span className="particle particle-4"></span>
              <span className="particle particle-5"></span>
            </div>
          </div>
        </div>

        {/* Subtle decorative line */}
        <div className="hero-accent-line"></div>
      </div>
    </section>
  );
}


/* ------------------------------------------------------------------ */
/*  Section 2 — Video                                                  */
/* ------------------------------------------------------------------ */
function VideoSection() {
  const scrollToFounders = () => {
    const target = document.getElementById('founders-club');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="video" className="section section-white">
      <div className="container">
        <div className="video-split-layout">
          <div className="video-cta-content">
            <h2>Become a Founding Partner</h2>
            <p>
              Join the businesses building payment infrastructure that won't reject them.
              Founding partners secure preferential rates, priority onboarding, and dedicated support.
            </p>
            <Button variant="gold" onClick={scrollToFounders}>
              Join Founders Club
            </Button>
          </div>

          <div className="video-container">
            <video
              className="intro-video"
              controls
              poster=""
            >
              <source src="/INTRO VIDEO 2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2b — Features                                               */
/* ------------------------------------------------------------------ */
const FEATURES = [
  { image: '/Fetaure 1.png', alt: 'Built for Businesses Others Decline' },
  { image: '/Feature 2 .png', alt: 'Safeguarded Payments by Design' },
  { image: '/Feature 3.png', alt: 'Global Customers, Local Expertise' },
  { image: '/Feature 4.png', alt: 'Earn While You Grow' },
  { image: '/Feature 5.png', alt: 'Total Visibility' },
  { image: '/Feature 6.png', alt: 'Faster, Fairer Onboarding' },
  { image: '/Feature 7.png', alt: 'Built by Founders Who\'ve Been There' },
  { image: '/Feature 8.png', alt: 'Real Humans. Real Support.' },
  { image: '/Feature 9.png', alt: 'Discreet & Brand Aware' },
];

function FeaturesSection() {
  return (
    <section id="features" className="section section-gray">
      <div className="container">
        <SectionHeader
          heading="Why Choose MTRX PAY"
          body="Everything you need to accept payments with confidence."
        />

        <div className="features-grid">
          {FEATURES.map((feature, index) => (
            <AnimatedSection key={feature.alt} delay={index * 0.05}>
              <div className="feature-card">
                <img src={feature.image} alt={feature.alt} className="feature-image" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3 — Industries Carousel (3D)                               */
/* ------------------------------------------------------------------ */
const INDUSTRIES = [
  {
    name: 'Creator & Digital Platforms',
    description: 'Payments and safeguarding infrastructure for subscription, fan, and content-led ecosystems.',
    image: '/Industry 1.jpg',
  },
  {
    name: 'Lifestyle',
    description: 'Compliant acquiring for contemporary brands in high-engagement consumer markets.',
    image: '/Industry 2.jpg',
  },
  {
    name: 'Wellness & Speciality Products',
    description: 'Secure processing for regulated health, nutraceutical, and botanical businesses.',
    image: '/Industry 3.jpg',
  },
  {
    name: 'Digital Training & Courses',
    description: 'Reliable monetisation for educators, academies, and expert-driven learning platforms.',
    image: '/Industry 4.jpg',
  },
  {
    name: 'Independent Providers',
    description: 'Secure, discreet payments for verified individuals and agency-supported bookings.',
    image: '/Industry 5.jpg',
  },
];

function IndustriesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % INDUSTRIES.length);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="industries" className="section section-navy">
      <div className="container">
        <SectionHeader
          dark
          heading="Industries We Serve"
          body="We champion businesses across pioneering and non-traditional industries."
        />

        <div className="carousel-3d">
          <div className="carousel-track">
            {INDUSTRIES.map((industry, index) => {
              const offset = index - activeIndex;
              const absOffset = Math.abs(offset);
              const isActive = index === activeIndex;

              return (
                <div
                  key={industry.name}
                  className={`carousel-card ${isActive ? 'active' : ''}`}
                  onClick={() => handleCardClick(index)}
                  style={{
                    transform: `
                      translateX(${offset * 120}%)
                      translateZ(${isActive ? 0 : -150 * absOffset}px)
                      rotateY(${offset * -25}deg)
                      scale(${isActive ? 1 : 0.8 - absOffset * 0.1})
                    `,
                    opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.2,
                    zIndex: INDUSTRIES.length - absOffset,
                  }}
                >
                  <img src={industry.image} alt={industry.name} className="carousel-card-image" />
                </div>
              );
            })}
          </div>

          <div className="carousel-dots">
            {INDUSTRIES.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleCardClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4 — Pricing                                                */
/* ------------------------------------------------------------------ */
function PricingSection() {
  return (
    <section id="pricing" className="section section-gray">
      <div className="container">
        <div className="pricing-split-layout">
          <div className="pricing-text-content">
            <AnimatedSection delay={0}>
              <h2>Simple, Transparent Pricing</h2>
              <p>No hidden fees. No surprises. Just straightforward pricing that scales with your business.</p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="pricing-main-card">
              <div className="pricing-main-header">
                <div className="pricing-stacked">
                  <div className="pricing-line">
                    <span className="price-value">£49</span>
                    <span className="price-desc">/month</span>
                  </div>
                  <div className="pricing-line">
                    <span className="price-value">7%</span>
                    <span className="price-desc">per transaction</span>
                  </div>
                </div>
              </div>
              <p className="pricing-main-description">
                No hidden fees. No surprises.
              </p>
              <ul className="pricing-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  All payment methods included
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Full dashboard access
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Priority support
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Fast settlements
                </li>
              </ul>
              <Button variant="gold" className="pricing-cta">
                Get Started
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4b — Affiliate Programme                                    */
/* ------------------------------------------------------------------ */
function AffiliateSection() {
  const scrollToFounders = () => {
    const target = document.getElementById('founders-club');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="affiliate" className="section section-white">
      <div className="container">
        <AnimatedSection delay={0}>
          <div className="affiliate-image-container">
            <img src="/Join the family 3.jpg" alt="Join the MTRX PAY Family - Become a Partner" className="affiliate-image" />
            <Button variant="gold" className="affiliate-btn" onClick={scrollToFounders}>
              Become a Partner
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5 — Subscription Support                                   */
/* ------------------------------------------------------------------ */
function SubscriptionSection() {
  return (
    <section id="subscriptions" className="section section-white">
      <div className="container">
        <AnimatedSection delay={0}>
          <div className="subscription-image-container">
            <img src="/Subscription image.jpg" alt="Subscription Support - Built for recurring billing" className="subscription-image" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 8 — Social Media                                           */
/* ------------------------------------------------------------------ */
function SocialSection() {
  return (
    <section id="social" className="section section-gray">
      <div className="container" style={{ textAlign: 'center' }}>
        <SectionHeader
          heading="Connect With Us"
          body="Stay updated with the latest news and updates from MTRX PAY."
        />

        <div className="social-links">
          <a href="https://twitter.com/mtrxpay" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/company/mtrxpay" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://instagram.com/mtrxpay" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 9 — Founders Club CTA                                      */
/* ------------------------------------------------------------------ */
function FoundersClubSection() {
  return (
    <section id="founders-club" className="section section-blue">
      <div className="container" style={{ textAlign: 'center' }}>
        <AnimatedSection>
          <p className="founders-limited">Limited Places Available</p>
          <h2 style={{ color: '#fff' }}>
            Become a Founding Partner
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="founders-offer">
            <span className="offer-text">No subscription fees for founding members for the first 90 days*</span>
            <span className="offer-disclaimer">*onboarding cost remains</span>
          </div>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '550px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.8,
              fontSize: '1.05rem',
            }}
          >
            Limited numbers only. Priority onboarding and dedicated support.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <EarlyAccessForm />
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Export                                                        */
/* ------------------------------------------------------------------ */
export function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <IndustriesCarousel />
      <PricingSection />
      <AffiliateSection />
      <SubscriptionSection />
      <FoundersClubSection />
      <SocialSection />
    </>
  );
}
