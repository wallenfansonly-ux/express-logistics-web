import { useLanguage } from '../context';
import './HeroSection.css';

const HeroSection = ({ onTrackClick }) => {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-line">{t.home.heroTitle}</span>
        </h1>
        <p className="hero-subtitle">{t.home.heroSubtitle}</p>
        <p className="hero-description">{t.home.heroDescription}</p>
        <div className="hero-actions">
          <button className="btn btn-primary btn-lg" onClick={onTrackClick}>
            {t.home.trackPackage}
          </button>
          <a href="#services" className="btn btn-outline btn-lg">
            {t.home.learnMore}
          </a>
        </div>
      </div>
      <div className="hero-animation">
        <div className="floating-package"></div>
        <div className="route-line"></div>
      </div>
    </section>
  );
};

export default HeroSection;
