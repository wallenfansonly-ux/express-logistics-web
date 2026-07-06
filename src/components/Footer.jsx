import { Link } from 'react-router-dom';
import { FaShippingFast, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../context';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <FaShippingFast className="footer-icon" />
              <span>Express Logistics</span>
            </Link>
            <p className="footer-description">{t.footer.description}</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>{t.footer.quickLinks}</h4>
            <ul>
              <li><Link to="/">{t.nav.home}</Link></li>
              <li><Link to="/track">{t.nav.track}</Link></li>
              <li><Link to="/services">{t.nav.services}</Link></li>
              <li><Link to="/about">{t.nav.about}</Link></li>
              <li><Link to="/contact">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>{t.nav.services}</h4>
            <ul>
              <li><Link to="/services">{t.services.express.title}</Link></li>
              <li><Link to="/services">{t.services.standard.title}</Link></li>
              <li><Link to="/services">{t.services.international.title}</Link></li>
              <li><Link to="/services">{t.services.freight.title}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{t.footer.contactInfo}</h4>
            <ul>
              <li>
                <FaPhone className="contact-icon" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>info@expresslogistics.com</span>
              </li>
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Shipping Lane, Global City, GC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Express Logistics. {t.footer.copyright}</p>
          <div className="footer-legal">
            <Link to="/terms">{t.footer.terms}</Link>
            <Link to="/privacy">{t.footer.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
