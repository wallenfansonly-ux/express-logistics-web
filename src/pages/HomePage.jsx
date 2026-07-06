import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useLanguage } from '../context';
import { TrackingSearch, PageTransition } from '../components';
import { FaPlane, FaWarehouse, FaGlobeAmericas, FaTruck, FaShieldAlt, FaClock, FaBox, FaShippingFast, FaQuoteLeft, FaStar, FaCheck } from 'react-icons/fa';
import './HomePage.css';

// Animated counter component
const AnimatedCounter = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
      const duration = 2000;
      const steps = 50;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          current = numericValue;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const HomePage = () => {
  const { t } = useLanguage();
  const trackRef = useRef(null);
  const controls = useAnimation();

  const scrollToTrack = () => {
    trackRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: <FaPlane />, title: t.services.express.title, description: t.services.express.description },
    { icon: <FaWarehouse />, title: t.services.warehousing.title, description: t.services.warehousing.description },
    { icon: <FaGlobeAmericas />, title: t.services.international.title, description: t.services.international.description },
    { icon: <FaTruck />, title: t.services.standard.title, description: t.services.standard.description },
  ];

  const stats = [
    { value: '200', suffix: '+', label: t.about.stats.countries },
    { value: '10', suffix: 'M+', label: t.about.stats.shipments },
    { value: '5', suffix: 'M+', label: t.about.stats.customers },
    { value: '15', suffix: 'K+', label: t.about.stats.employees },
  ];

  const whyChooseUs = [
    { icon: <FaClock />, title: '24/7 Support', description: 'Round-the-clock customer service for all your shipping needs.' },
    { icon: <FaShieldAlt />, title: 'Secure Delivery', description: 'Your packages are safe with our advanced security measures.' },
    { icon: <FaGlobeAmericas />, title: 'Global Network', description: 'Extensive network covering every corner of the world.' },
    { icon: <FaBox />, title: 'Real-time Tracking', description: 'Track your shipments in real-time from pickup to delivery.' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Owner',
      content: 'Express Logistics transformed our shipping operations. Their real-time tracking and reliable delivery have made us look good to our customers.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'E-commerce Manager',
      content: 'The live tracking feature is incredible. Our customers love knowing exactly where their packages are at any moment.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Supply Chain Director',
      content: 'International shipping has never been easier. Express Logistics handles everything seamlessly.',
      rating: 5,
    },
  ];

  const partners = [
    'Amazon', 'eBay', 'Shopify', 'FedEx', 'DHL', 'UPS'
  ];

  return (
    <PageTransition>
      <div className="home-page">
        {/* Full-screen Hero with animated background */}
        <section className="hero-full">
          <div className="hero-background">
            <div className="world-map-overlay"></div>
            <div className="gradient-overlay"></div>
            {/* Animated vehicles */}
            <motion.div
              className="plane animated"
              initial={{ x: -100, y: 50 }}
              animate={{ x: '100vw', y: -50 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            >
              <FaPlane />
            </motion.div>
            <motion.div
              className="truck animated"
              initial={{ x: '100vw' }}
              animate={{ x: -100 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <FaTruck />
            </motion.div>
          </div>

          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1>
                {t.hero.title.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    {word}{' '}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {t.hero.subtitle}
              </motion.p>
            </motion.div>

            <motion.div
              className="hero-search"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <TrackingSearch variant="standalone" />
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {stats.slice(0, 3).map((stat, index) => (
                <div key={index} className="hero-stat">
                  <span className="hero-stat-value">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={scrollToTrack}
          >
            <span></span>
          </motion.div>
        </section>

        {/* Tracking Section */}
        <section className="tracking-section glass-section" ref={trackRef}>
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t.tracking.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t.tracking.subtitle}
            </motion.p>
            <TrackingSearch variant="standalone" />
            <p className="tracking-help">{t.tracking.trackingHelp}</p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>{t.home.ourServices}</h2>
              <p>{t.services.subtitle}</p>
            </motion.div>
            <motion.div
              className="services-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {features.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card glass-card"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section with Counters */}
        <section className="stats-section">
          <div className="stats-background"></div>
          <div className="container">
            <motion.div
              className="stats-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item glass-card"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <span className="stat-value">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>{t.home.whyChooseUs}</h2>
              <p>Experience the difference with Express Logistics</p>
            </motion.div>
            <motion.div
              className="why-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="why-card glass-card"
                  variants={{
                    hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="why-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section glass-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>What Our Customers Say</h2>
              <p>Trusted by millions of customers worldwide</p>
            </motion.div>
            <motion.div
              className="testimonials-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="testimonial-card glass-card"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-content">{testimonial.content}</p>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                    <div>
                      <span className="author-name">{testimonial.name}</span>
                      <span className="author-role">{testimonial.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Partners */}
        <section className="partners-section">
          <div className="container">
            <motion.p
              className="partners-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Trusted by Industry Leaders
            </motion.p>
            <motion.div
              className="partners-logos"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="partner-logo"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {partner}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-background"></div>
          <div className="container">
            <motion.div
              className="cta-content glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaShippingFast className="cta-icon" />
              <h2>{t.home.getStarted}</h2>
              <p>Join thousands of satisfied customers who trust Express Logistics for their shipping needs.</p>
              <motion.button
                className="btn btn-primary btn-lg ripple-btn"
                onClick={scrollToTrack}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.home.trackPackage}
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default HomePage;
