import { useState, useEffect } from 'react';
import { FaSearch, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useLanguage } from '../../context';
import { LoadingSpinner } from '../../components';
import './AdminCustomersPage.css';

const CustomersPage = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const demoCustomers = [
        { id: '1', name: 'John Smith', email: 'john@example.com', phone: '+1 555-123-4567', shipments: 15, status: 'active' },
        { id: '2', name: 'Jane Doe', email: 'jane@example.com', phone: '+1 555-987-6543', shipments: 8, status: 'active' },
        { id: '3', name: 'Acme Corp', email: 'shipping@acme.com', phone: '+1 555-456-7890', shipments: 150, status: 'active' },
        { id: '4', name: 'Bob Wilson', email: 'bob@example.com', phone: '+1 555-222-3333', shipments: 3, status: 'inactive' },
        { id: '5', name: 'Globex Inc', email: 'logistics@globex.com', phone: '+1 555-777-8888', shipments: 500, status: 'vip' },
      ];
      setCustomers(demoCustomers);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="customers-page">
        <LoadingSpinner size="large" message={t.common.loading} />
      </div>
    );
  }

  return (
    <div className="customers-page">
      <div className="page-header">
        <h1>{t.admin.customers}</h1>
      </div>

      <div className="filters-bar">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder={`${t.common.search}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="customers-grid">
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="customer-card">
            <div className="customer-avatar">
              {customer.name.charAt(0)}
            </div>
            <div className="customer-info">
              <h3>{customer.name}</h3>
              <div className="customer-contact">
                <span><FaEnvelope /> {customer.email}</span>
                <span><FaPhone /> {customer.phone}</span>
              </div>
              <div className="customer-stats">
                <span className="stat">{customer.shipments} shipments</span>
                <span className={`status-badge ${customer.status}`}>{customer.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomersPage;
