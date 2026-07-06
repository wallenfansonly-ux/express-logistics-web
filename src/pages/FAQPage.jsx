import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import { useLanguage } from '../context';
import './FAQPage.css';

const FAQPage = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('tracking');
  const [openItem, setOpenItem] = useState(null);

  const categories = [
    { id: 'tracking', name: t.faq.categories.tracking },
    { id: 'shipping', name: t.faq.categories.shipping },
    { id: 'payment', name: t.faq.categories.payment },
    { id: 'returns', name: t.faq.categories.returns },
  ];

  const faqs = {
    tracking: [
      {
        question: 'How do I track my shipment?',
        answer: 'Enter your tracking number in the search box on our homepage or track page. Your tracking number was provided in your confirmation email.'
      },
      {
        question: 'How often is tracking information updated?',
        answer: 'Tracking information is updated in real-time as your package moves through our network. Updates typically occur at each facility checkpoint.'
      },
      {
        question: 'What does "In Transit" mean?',
        answer: 'In Transit means your package is on its way to the destination. It may be moving between facilities or on a delivery vehicle.'
      },
      {
        question: 'My tracking shows delivered but I havent received it. What should I do?',
        answer: 'Check with neighbors or your building manager. If still not found, contact customer support within 7 days for an investigation.'
      },
    ],
    shipping: [
      {
        question: 'What are the delivery timeframes?',
        answer: 'Express: 24-48 hours. Standard: 3-5 business days. International: varies by destination, typically 5-14 business days.'
      },
      {
        question: 'Can I change the delivery address?',
        answer: 'Yes, address changes can be made before the package is out for delivery. Contact us immediately to request changes.'
      },
      {
        question: 'What items are restricted?',
        answer: 'We cannot ship hazardous materials, perishables, live animals, or items prohibited by destination country regulations.'
      },
      {
        question: 'Is insurance included?',
        answer: 'Basic insurance up to $100 is included. Additional coverage can be purchased for high-value items.'
      },
    ],
    payment: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for business accounts.'
      },
      {
        question: 'When will I be charged?',
        answer: 'Payment is processed at the time of booking. For business accounts, invoices are issued monthly.'
      },
      {
        question: 'Can I get a refund?',
        answer: 'Refunds are available if the shipment is cancelled before pickup. After shipment, partial refunds may apply depending on circumstances.'
      },
    ],
    returns: [
      {
        question: 'How do I return a package?',
        answer: 'Contact us to generate a return label. You can drop off the package at any authorized location or schedule a pickup.'
      },
      {
        question: 'Who pays for return shipping?',
        answer: 'Return shipping costs depend on the reason for return. Defective items qualify for free returns. Check your original purchase terms.'
      },
      {
        question: 'How long do refunds take?',
        answer: 'Refunds are processed within 5-7 business days after we receive and inspect the returned item.'
      },
    ],
  };

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <div className="container">
          <h1>{t.faq.title}</h1>
          <p>{t.faq.subtitle}</p>
        </div>
      </section>

      <section className="faq-content">
        <div className="container">
          <div className="faq-container">
            <div className="faq-categories">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="faq-list">
              {faqs[activeCategory]?.map((faq, index) => (
                <div key={index} className={`faq-item ${openItem === index ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => toggleItem(index)}>
                    <FaQuestionCircle className="faq-icon" />
                    <span>{faq.question}</span>
                    <FaChevronDown className="faq-chevron" />
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
