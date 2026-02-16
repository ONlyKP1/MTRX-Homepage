import { AnimatedSection } from '../components/AnimatedSection';
import { SectionHeader } from '../components/common';
import { EarlyAccessForm } from '../components/forms';

export function AboutPage() {
  return (
    <>
      {/* Section 1: Video */}
      <section className="section section-white about-video-section">
        <div className="container">
          <div className="about-video-container">
            <video
              className="about-video"
              controls
              preload="metadata"
              playsInline
              poster="/Thumbnail 2.png"
            >
              <source src="/About Us 2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Section 2: Our Mission */}
      <section className="section section-white">
        <div className="container">
          <AnimatedSection>
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                Every legitimate business deserves payment infrastructure that works for them, not
                against them.
              </p>
              <p>
                The payment processing industry has a problem. Too many legitimate businesses are
                denied service, frozen out, or abandoned by processors who would rather avoid
                complexity than manage it properly.
              </p>
              <p>
                MTRX PAY exists to solve this. We're building payment infrastructure that combines
                institutional-grade compliance with genuine merchant advocacy.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: What Success Looks Like */}
      <section className="section section-gray">
        <div className="container">
          <SectionHeader heading="What Success Looks Like" />
          <div className="success-split">
            <AnimatedSection animation="fade-right">
              <ul className="success-list">
                <li>
                  A merchant launches their business and gets approved in days, not rejected in
                  seconds.
                </li>
                <li>
                  Every legitimate business has access to reliable payment processing
                </li>
                <li>
                  Merchants understand exactly why decisions are made about their accounts
                </li>
                <li>
                  Compliance is a collaborative process, not a punitive one
                </li>
                <li>
                  Payment processing relationships are measured in years, not months
                </li>
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={0.2}>
              <div className="highlight-box">
                <h4>Customer Service Isn't a Department. It's Our DNA</h4>
                <p>
                  Payment processing shouldn't feel like dealing with an automated rejection
                  machine. We believe in human-first support, transparent communication, and
                  building genuine partnerships with every merchant we serve.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4: Core Values */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader heading="What We Stand For" />
          <div className="values-grid">
            <AnimatedSection delay={0}>
              <div className="value-card">
                <h3>Customer First</h3>
                <p>
                  Every decision starts with one question: does this serve our merchants better? We
                  measure our success by the success of the businesses we serve.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="value-card">
                <h3>Transparency</h3>
                <p>
                  Clear pricing, documented processes, and honest communication at every step. No
                  hidden fees, no black-box decisions, no surprises.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="value-card">
                <h3>Innovation</h3>
                <p>
                  We leverage technology to solve problems that others avoid. Modern infrastructure,
                  intelligent risk assessment, and continuous improvement.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="value-card">
                <h3>Inclusivity</h3>
                <p>
                  We believe legitimate businesses in every industry deserve payment processing.
                  Your industry label shouldn't determine your access to financial services.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 5: Our Approach */}
      <section className="section section-navy">
        <div className="container">
          <SectionHeader dark={true} heading="How We Work" />
          <div className="approach-items">
            <AnimatedSection delay={0}>
              <div className="approach-item">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4L6 12V22C6 33.1 13.68 43.36 24 46C34.32 43.36 42 33.1 42 22V12L24 4ZM24 42.14C15.72 39.74 10 30.88 10 22V14.48L24 8.14L38 14.48V22C38 30.88 32.28 39.74 24 42.14ZM20 30L14 24L16.82 21.18L20 24.34L31.18 13.18L34 16L20 30Z"
                    fill="currentColor"
                  />
                </svg>
                <h3>Regulatory Compliance</h3>
                <p>
                  We don't just meet regulatory requirements. We exceed them. Our compliance
                  framework is designed to give regulators confidence and give merchants peace of
                  mind.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="approach-item">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 8H40C42.2 8 44 9.8 44 12V36C44 38.2 42.2 40 40 40H8C5.8 40 4 38.2 4 36V12C4 9.8 5.8 8 8 8ZM8 12V36H40V12H8ZM12 16H16L20 22L16 28H12L16 22L12 16ZM22 26H34V30H22V26Z"
                    fill="currentColor"
                  />
                </svg>
                <h3>Technology Stack</h3>
                <p>
                  Built on modern, scalable infrastructure with API-first design. Our platform is
                  engineered for reliability, security, and rapid feature development.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="approach-item">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 20C19.32 20 22 17.32 22 14C22 10.68 19.32 8 16 8C12.68 8 10 10.68 10 14C10 17.32 12.68 20 16 20ZM16 12C17.1 12 18 12.9 18 14C18 15.1 17.1 16 16 16C14.9 16 14 15.1 14 14C14 12.9 14.9 12 16 12ZM32 20C35.32 20 38 17.32 38 14C38 10.68 35.32 8 32 8C28.68 8 26 10.68 26 14C26 17.32 28.68 20 32 20ZM32 12C33.1 12 34 12.9 34 14C34 15.1 33.1 16 32 16C30.9 16 30 15.1 30 14C30 12.9 30.9 12 32 12ZM32 24C28.44 24 21.34 25.78 18 28.24C14.66 25.78 7.56 24 4 24V28C7.56 28 14.22 30.06 16 31.68V40H20V33.08C22.14 31.82 27.12 28 32 28C36.88 28 41.86 31.82 44 33.08V40H48V31.68C48 28 39.56 24 32 24ZM22.32 30.3C24.36 29.12 27.74 28 32 28C27 28 22.86 29.72 22.32 30.3Z"
                    fill="currentColor"
                  />
                </svg>
                <h3>Partnership Ecosystem</h3>
                <p>
                  We work with acquiring banks, card schemes, and technology partners who share our
                  vision of inclusive, reliable payment processing.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 6: Team */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader heading="Built by a Team Committed to Universal Payment Access" />
          <div className="team-grid">
            <AnimatedSection delay={0}>
              <div className="team-card">
                <div className="team-avatar" />
                <h4>Coming Soon</h4>
                <p className="team-role">Leadership Profile</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="team-card">
                <div className="team-avatar" />
                <h4>Coming Soon</h4>
                <p className="team-role">Leadership Profile</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="team-card">
                <div className="team-avatar" />
                <h4>Coming Soon</h4>
                <p className="team-role">Leadership Profile</p>
              </div>
            </AnimatedSection>
          </div>
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>
            Our leadership team brings decades of experience across payments, fintech, compliance,
            and technology. Full profiles coming soon.
          </p>
        </div>
      </section>

      {/* Section 7: Founders Club */}
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
    </>
  );
}
