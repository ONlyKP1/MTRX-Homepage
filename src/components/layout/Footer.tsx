import { Link } from 'react-router-dom';
import { AnimatedSection } from '../AnimatedSection';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <AnimatedSection delay={0}>
            <div className="footer-brand-center">
              <Link to="/" className="nav-logo">
                <img src="/logo.png" alt="MTRX PAY" className="footer-logo-img" />
              </Link>
              <p className="footer-tagline">MTRX PAY powered by MIDAS TRANSACTION EXCHANGE</p>
            </div>
          </AnimatedSection>
        </div>

        <div className="footer-bottom">
          <div className="footer-registrations">
            <p>MTRX PAY LIMITED | Registered in England & Wales | Company No. 16913646</p>
            <p>MIDAS TRANSACTION EXCHANGE - FZCO | License Number: 75905</p>
          </div>
          <p className="footer-copyright">&copy; 2026 MTRX PAY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
