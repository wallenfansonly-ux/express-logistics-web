import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaShippingFast, FaUser } from 'react-icons/fa';
import { useLanguage, useTheme, useAuth } from '../context';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const { isAuthenticated, user, userData } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleAccountClick = () => {
    navigate('/account/dashboard');
    closeMenu();
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <FaShippingFast className="brand-icon" />
          <span>Express Logistics</span>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            {t.nav.home}
          </NavLink>
          <NavLink to="/track" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            {t.nav.track}
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            {t.nav.services}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            {t.nav.about}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            {t.nav.contact}
          </NavLink>
          <NavLink to="/faq" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            {t.nav.faq}
          </NavLink>

          <div className="navbar-actions">
            <LanguageSwitcher />
            <ThemeToggle />
            {isAuthenticated ? (
              <button className="btn btn-outline nav-btn" onClick={handleAccountClick}>
                <FaUser /> {userData?.name || user?.email?.split('@')[0] || 'Account'}
              </button>
            ) : (
              <Link to="/account/login" className="btn btn-primary nav-btn" onClick={closeMenu}>
                <FaUser /> Sign In
              </Link>
            )}
          </div>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
