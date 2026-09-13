import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavbarScroll } from '../../hooks/useScrollAnimation';

const navLinks = [
  /*
    Only pages this site actually has.

    The app's nav carries Pricing, FAQ and Contact. None of them exist here,
    and this repo's catch-all sends an unknown path silently back to the
    homepage, so a link to one would look like a click that did not register.
    A shorter nav is better than one that lies about what is behind it.
  */
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Product', to: '/product' },
  { label: 'Technology', to: '/technology' },
];

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isScrolled, isVisible } = useNavbarScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * The nav never asked who was signed in, so it always offered Log In and
   * Join Now. Coming back to the marketing site from the dashboard therefore
   * looked exactly like having been signed out, and the usual response is to
   * sign in again. The session was there the whole time.
   */
  /*
    No signed-in state on a marketing site.

    The app's navigation shows an account menu once somebody is logged in, and
    it reads that from an AuthContext that only exists there. This site holds
    no session, so Log In and Join Now always show and both hand over to the
    app rather than pretending to have a dashboard behind them.
  */

  // Admins do not have a merchant dashboard, and sending them to one shows an
  // empty overview belonging to nobody.
  /** Where the product actually lives. */
  const APP_URL = 'https://mtrxpay-app.vercel.app';

  const navClasses = [
    'hp-nav',
    isScrolled ? 'hp-nav--scrolled' : '',
    !isVisible ? 'hp-nav--hidden' : '',
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClasses}>
      <div className="hp-nav__inner">
        <Link to="/" className="hp-nav__brand">
          <img src="/logo.png" alt="MTRXPAY" className="hp-nav__logo" />
        </Link>

        <div className="hp-nav__links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hp-nav__link${location.pathname === link.to ? ' hp-nav__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hp-nav__actions">
          <a className="hp-nav__login" href={`${APP_URL}/login`}>
            Log In
          </a>
          <button className="hp-nav__cta" onClick={() => navigate('/join')}>
            JOIN NOW
          </button>
        </div>

        <button
          className={`hp-nav__burger ${isMobileMenuOpen ? 'hp-nav__burger--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="hp-nav__mobile">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={location.pathname === link.to ? 'hp-nav__link--active' : ''}
            >
              {link.label}
            </Link>
          ))}
          <div className="hp-nav__mobile-actions">
            <a className="hp-nav__login" href={`${APP_URL}/login`}>
              Log In
            </a>
            <button
              type="button"
              className="hp-nav__cta"
              onClick={() => { navigate('/join'); setIsMobileMenuOpen(false); }}
            >
              JOIN NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
