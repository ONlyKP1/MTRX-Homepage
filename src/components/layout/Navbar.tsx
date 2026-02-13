import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useNavbarScroll } from '../../hooks/useScrollAnimation';

export function Navbar() {
  const { isScrolled, isVisible } = useNavbarScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [privacyMode, setPrivacyMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleCTAClick = () => {
    setMobileOpen(false);

    const target = document.getElementById('early-access');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#early-access');
    }
  };

  const closeMobile = () => setMobileOpen(false);

  const togglePrivacyMode = () => {
    setPrivacyMode((prev) => !prev);
  };

  useEffect(() => {
    if (privacyMode) {
      document.body.classList.add('privacy-mode');
    } else {
      document.body.classList.remove('privacy-mode');
    }
  }, [privacyMode]);

  return (
    <nav
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${!isVisible ? 'navbar-hidden' : ''}`}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMobile}>
          <img src="/logo.png" alt="MTRXPAY" className="nav-logo-img" />
        </Link>

        <div className="nav-links">
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            Home
          </Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>
            About Us
          </Link>
          <a href="#compliance" onClick={(e) => { e.preventDefault(); document.getElementById('compliance')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Compliance Centre
          </a>
          <button className={`privacy-toggle ${privacyMode ? 'active' : ''}`} onClick={togglePrivacyMode} aria-label="Toggle Privacy Mode">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
              <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
              <line x1="1" y1="1" x2="23" y2="23" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>

        <button className="nav-cta" onClick={handleCTAClick}>
          Request Early Access
        </button>

        <button
          className={`burger-menu ${mobileOpen ? 'burger-open' : ''}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      </div>

      <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
        <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMobile}>
          Home
        </Link>
        <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMobile}>
          About Us
        </Link>
        <a href="#compliance" onClick={(e) => { e.preventDefault(); closeMobile(); document.getElementById('compliance')?.scrollIntoView({ behavior: 'smooth' }); }}>
          Compliance Centre
        </a>
        <button className={`privacy-toggle ${privacyMode ? 'active' : ''}`} onClick={togglePrivacyMode} aria-label="Toggle Privacy Mode">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
            <line x1="1" y1="1" x2="23" y2="23" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
        <button className="nav-cta" onClick={handleCTAClick}>
          Request Early Access
        </button>
      </div>
    </nav>
  );
}
