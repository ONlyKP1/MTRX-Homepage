import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="mtrx-footer">
      <div className="container">

        {/* ── Main grid ── */}
        <div className="mtrx-footer-grid">

          {/* Brand col */}
          <div className="mtrx-footer-brand">
            <Link to="/">
              <img src="/logo.png" alt="MTRX PAY" className="mtrx-footer-logo" />
            </Link>
            <p className="mtrx-footer-brand-desc">
              Compliant payment infrastructure for merchants operating in specialist verticals. Built for approval, structured for scale.
            </p>
            <a href="/join" className="mtrx-footer-cta">Apply for Founding Access →</a>
          </div>

          {/* Platform */}
          <div className="mtrx-footer-col">
            <h4 className="mtrx-footer-col-head">Platform</h4>
            <ul className="mtrx-footer-links">
              <li><Link to="/technology">Technology</Link></li>
              <li><Link to="/technology#payment-rails">Payment Rails</Link></li>
              <li><Link to="/technology#compliance">Compliance Suite</Link></li>
              <li><Link to="/technology#risk">Risk Scoring</Link></li>
              <li><Link to="/technology#wallets">Wallet Infrastructure</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="mtrx-footer-col">
            <h4 className="mtrx-footer-col-head">Company</h4>
            <ul className="mtrx-footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/join">Founding Partners</Link></li>
              <li><Link to="/">Home</Link></li>
            </ul>
          </div>

          {/* Get Started */}
          <div className="mtrx-footer-col">
            <h4 className="mtrx-footer-col-head">Get Started</h4>
            <ul className="mtrx-footer-links">
              <li><Link to="/join">Apply Now</Link></li>
              <li><a href="mailto:hello@mtrxpay.com">Contact Us</a></li>
            </ul>
            <div className="mtrx-footer-badge">
              <span className="mtrx-footer-badge-dot" />
              <span>Platform launching Q2 2026</span>
            </div>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="mtrx-footer-divider" />

        {/* ── Bottom bar ── */}
        <div className="mtrx-footer-bottom">
          <div className="mtrx-footer-reg">
            <span>MTRX PAY LIMITED · Registered in England &amp; Wales · Co. No. 16913646</span>
            <span className="mtrx-footer-reg-sep">·</span>
            <span>MIDAS TRANSACTION EXCHANGE FZCO · License No. 75905</span>
          </div>
          <p className="mtrx-footer-copy">&copy; 2026 MTRX PAY. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
