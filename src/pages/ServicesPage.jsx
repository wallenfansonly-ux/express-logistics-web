import { FaPlane, FaTruck, FaWarehouse, FaGlobeAmericas, FaShoppingCart, FaShieldAlt, FaClock, FaHeadset } from 'react-icons/fa';
import { useLanguage } from '../context';
import './ServicesPage.css';

const ServicesPage = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <FaPlane />,
      title: t.services.express.title,
      description: t.services.express.description,
      features: ['24-48 hour delivery', 'Priority handling', 'Real-time tracking', 'Insurance included']
    },
    {
      icon: <FaTruck />,
      title: t.services.standard.title,
      description: t.services.standard.description,
      features: ['3-5 business days', 'Economical pricing', 'Tracking included', 'Reliable delivery']
    },
    {
      icon: <FaGlobeAmericas />,
      title: t.services.international.title,
      description: t.services.international.description,
      features: ['200+ countries', 'Customs handling', 'End-to-end tracking', 'Door-to-door service']
    },
    {
      icon: <FaWarehouse />,
      title: t.services.freight.title,
      description: t.services.freight.description,
      features: ['Heavy cargo handling', 'Bulk shipping', 'Special handling', 'Dedicated support']
    },
    {
      icon: <FaWarehouse />,
      title: t.services.warehousing.title,
      description: t.services.warehousing.description,
      features: ['Secure storage', 'Inventory management', 'Fulfillment service', 'Climate controlled']
    },
    {
      icon: <FaShoppingCart />,
      title: t.services.ecommerce.title,
      description: t.services.ecommerce.description,
      features: ['API integration', 'Same-day dispatch', 'Returns handling', 'Branded tracking']
    },
  ];

  const guarantees = [
    { icon: <FaShieldAlt />, title: 'Safe Delivery', description: 'Your packages are insured and protected' },
    { icon: <FaClock />, title: 'On-Time Delivery', description: '99% on-time delivery rate' },
    { icon: <FaHeadset />, title: '24/7 Support', description: 'Always here to help' },
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>{t.services.title}</h1>
          <p>{t.services.subtitle}</p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="guarantees-section">
        <div className="container">
          <div className="guarantees-grid">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="guarantee-card">
                <div className="guarantee-icon">{guarantee.icon}</div>
                <h3>{guarantee.title}</h3>
                <p>{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
