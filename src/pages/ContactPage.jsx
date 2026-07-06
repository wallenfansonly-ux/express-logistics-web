import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useLanguage } from '../context';
import './ContactPage.css';

const ContactPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>{t.contact.title}</h1>
          <p>{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>{t.contact.getInTouch}</h2>
              {submitted ? (
                <div className="success-message">
                  <p>{t.common.success}! Your message has been sent.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">{t.contact.form.name}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">{t.contact.form.email}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">{t.contact.form.phone}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">{t.contact.form.subject}</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">{t.contact.form.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">{t.contact.form.submit}</button>
                </form>
              )}
            </div>

            <div className="contact-info">
              <h2>{t.contact.info.phone}</h2>
              <div className="info-list">
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <div>
                    <span className="info-label">{t.contact.info.phone}</span>
                    <span className="info-value">+1 (800) 123-4567</span>
                  </div>
                </div>
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <span className="info-label">{t.contact.info.email}</span>
                    <span className="info-value">info@expresslogistics.com</span>
                  </div>
                </div>
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <span className="info-label">{t.contact.info.address}</span>
                    <span className="info-value">123 Shipping Lane<br />Global City, GC 12345</span>
                  </div>
                </div>
                <div className="info-item">
                  <FaClock className="info-icon" />
                  <div>
                    <span className="info-label">{t.contact.info.hours}</span>
                    <span className="info-value">Mon - Fri: 9AM - 6PM<br />Sat: 10AM - 4PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-placeholder">
            <FaMapMarkerAlt className="map-icon" />
            <p>Interactive map coming soon</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
