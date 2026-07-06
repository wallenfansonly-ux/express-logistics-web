import { FaPlane, FaUsers, FaGlobeAmericas, FaAward, FaRocket, FaHandshake } from 'react-icons/fa';
import { useLanguage } from '../context';
import './AboutPage.css';

const AboutPage = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: <FaGlobeAmericas />, value: '200+', label: t.about.stats.countries },
    { icon: <FaPlane />, value: '10M+', label: t.about.stats.shipments },
    { icon: <FaUsers />, value: '5M+', label: t.about.stats.customers },
    { icon: <FaAward />, value: '15K+', label: t.about.stats.employees },
  ];

  const values = [
    { icon: <FaHandshake />, title: 'Customer First', description: 'We put our customers at the center of everything we do.' },
    { icon: <FaRocket />, title: 'Innovation', description: 'Continuously improving our services with cutting-edge technology.' },
    { icon: <FaAward />, title: 'Excellence', description: 'Delivering the highest quality service every time.' },
    { icon: <FaGlobeAmericas />, title: 'Sustainability', description: 'Committed to environmentally responsible practices.' },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>{t.about.title}</h1>
          <p>{t.about.subtitle}</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <h2>{t.about.mission}</h2>
              <p>{t.about.missionText}</p>
            </div>
            <div className="mission-card">
              <h2>{t.about.vision}</h2>
              <p>{t.about.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="section-header">
            <h2>{t.about.values}</h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline-content">
            <div className="timeline-item">
              <div className="timeline-year">2005</div>
              <div className="timeline-text">Founded with a vision to revolutionize global shipping</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-text">Expanded to 50+ countries with advanced tracking technology</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-text">Launched e-commerce solutions and same-day delivery</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-text">Achieved carbon-neutral operations across all facilities</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-text">Now serving 200+ countries with 10M+ shipments annually</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
