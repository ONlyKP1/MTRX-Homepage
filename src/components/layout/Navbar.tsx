import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavbarScroll } from '../../hooks/useScrollAnimation';

export function Navbar() {
  const { isScrolled, isVisible } = useNavbarScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${!isVisible ? 'navbar-hidden' : ''}`}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMobile}>
          <img src="/logo.png" alt="MTRX PAY" className="nav-logo-img" />
        </Link>

        <div className="nav-links">
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            Home
          </Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>
            About Us
          </Link>
          <Link to="/technology" className={isActive('/technology') ? 'active' : ''}>
            Technology
          </Link>
          <Link to="/join" className={`nav-join-btn ${isActive('/join') ? 'active' : ''}`}>
            Join Now
          </Link>
        </div>

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
        <Link to="/technology" className={isActive('/technology') ? 'active' : ''} onClick={closeMobile}>
          Technology
        </Link>
        <Link to="/join" className={isActive('/join') ? 'active' : ''} onClick={closeMobile}>
          Join Now
        </Link>
      </div>
    </nav>
  );
}
