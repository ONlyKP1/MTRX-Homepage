import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="mtrx-footer">
      <div className="container">

        <div className="mtrx-footer-inner">
          <Link to="/">
            <img src="/logo.png" alt="MTRX PAY" className="mtrx-footer-logo" />
          </Link>

          <nav className="mtrx-footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/join">Join Now</Link>
          </nav>
        </div>

        <div className="mtrx-footer-divider" />

        <div className="mtrx-footer-legal">
          <span>© 2026 MIDAS TRANSACTION EXCHANGE PAY LIMITED · England & Wales · Co. No. 17246798 · 71–75 Shelton Street, London WC2H 9JQ</span>
          <span>MIDAS TRANSACTION EXCHANGE FZCO · License No. 75905 · IFZA Business Park, DDP, Dubai</span>
        </div>

      </div>
    </footer>
  );
}
