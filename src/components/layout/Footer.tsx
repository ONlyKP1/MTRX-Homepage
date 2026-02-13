import { Link } from 'react-router-dom';
import { AnimatedSection } from '../AnimatedSection';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <AnimatedSection delay={0}>
            <div className="footer-brand">
              <Link to="/" className="nav-logo">
                <img src="/logo.png" alt="MTRXPAY" className="nav-logo-img" />
              </Link>
              <p>The Universal Payment Processing Partner</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="footer-column">
              <h4>Company</h4>
              <div className="footer-links">
                <Link to="/about">About Us</Link>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
                <a href="#">Press</a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="footer-column">
              <h4>Resources</h4>
              <div className="footer-links">
                <a href="#">Documentation</a>
                <a href="#">API Reference</a>
                <a href="#">Blog</a>
                <a href="#">Support</a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="footer-column">
              <h4>Legal</h4>
              <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Compliance</a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 MTRXPAY. A MIDAS Company.</p>
          <p>Registered in England & Wales | Company No. 12345678</p>
        </div>
      </div>
    </footer>
  );
}
