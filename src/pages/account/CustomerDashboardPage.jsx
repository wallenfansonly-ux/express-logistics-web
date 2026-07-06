import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaMapMarkerAlt, FaClock, FaTruck, FaCheck, FaExclamationCircle } from 'react-icons/fa';
import { useLanguage, useAuth } from '../../context';
import { StatusBadge, LoadingSpinner } from '../../components';
import './CustomerPages.css';

const CustomerDashboardPage = () => {
  const { t } = useLanguage();
  const { user, userData } = useAuth();
  const [loading, setLoading] = useState(true);
  const [shipments, setShipments] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    inTransit: 0,
    delivered: 0,
    pending: 0
  });

  useEffect(() => {
    // Simulate fetching user's shipments
    const timer = setTimeout(() => {
      const demoShipments = [
        {
          id: '1',
          trackingNumber: 'EXPLK8A2B3',
          origin: 'New York, USA',
          destination: 'Los Angeles, USA',
          status: 'in_transit',
          estimatedDelivery: '2025-01-15',
          currentLocation: 'Phoenix, AZ',
          createdAt: '2025-01-10'
        },
        {
          id: '2',
          trackingNumber: 'EXPLM9C4D5',
          origin: 'Chicago, USA',
          destination: 'Miami, USA',
          status: 'delivered',
          deliveredDate: '2025-01-08',
          createdAt: '2025-01-05'
        },
        {
          id: '3',
          trackingNumber: 'EXPLN7E6F7',
          origin: 'Seattle, USA',
          destination: 'Denver, USA',
          status: 'pending',
          estimatedDelivery: '2025-01-20',
          createdAt: '2025-01-11'
        }
      ];
      setShipments(demoShipments);
      setStats({
        total: demoShipments.length,
        inTransit: demoShipments.filter(s => s.status === 'in_transit').length,
        delivered: demoShipments.filter(s => s.status === 'delivered').length,
        pending: demoShipments.filter(s => s.status === 'pending').length
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="customer-dashboard">
        <LoadingSpinner size="large" message="Loading your shipments..." />
      </div>
    );
  }

  return (
    <div className="customer-dashboard">
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>Welcome back, {userData?.name || user?.email?.split('@')[0] || 'Customer'}</h1>
          <p>Track and manage your shipments</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon total">
            <FaBox />
          </div>
          <div className="stat-content">
            <span className="stat-value">{stats.total}</span>
            <span className="stat-label">Total Shipments</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon transit">
            <FaTruck />
          </div>
          <div className="stat-content">
            <span className="stat-value">{stats.inTransit}</span>
            <span className="stat-label">In Transit</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon delivered">
            <FaCheck />
          </div>
          <div className="stat-content">
            <span className="stat-value">{stats.delivered}</span>
            <span className="stat-label">Delivered</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon pending">
            <FaClock />
          </div>
          <div className="stat-content">
            <span className="stat-value">{stats.pending}</span>
            <span className="stat-label">Pending</span>
          </div>
        </div>
      </div>

      <div className="shipments-section">
        <div className="section-header">
          <h2>Your Shipments</h2>
          <Link to="/track" className="btn btn-outline">Track New Shipment</Link>
        </div>

        {shipments.length === 0 ? (
          <div className="empty-state">
            <FaExclamationCircle className="empty-icon" />
            <h3>No Shipments Yet</h3>
            <p>You don't have any shipments associated with your account.</p>
          </div>
        ) : (
          <div className="shipments-list">
            {shipments.map((shipment) => (
              <div key={shipment.id} className="shipment-card">
                <div className="shipment-header">
                  <div className="tracking-number">
                    <FaBox />
                    <span>{shipment.trackingNumber}</span>
                  </div>
                  <StatusBadge status={shipment.status} />
                </div>
                <div className="shipment-route">
                  <div className="route-point">
                    <FaMapMarkerAlt className="origin-icon" />
                    <span>{shipment.origin}</span>
                  </div>
                  <div className="route-line"></div>
                  <div className="route-point">
                    <FaMapMarkerAlt className="dest-icon" />
                    <span>{shipment.destination}</span>
                  </div>
                </div>
                <div className="shipment-footer">
                  {shipment.status === 'delivered' ? (
                    <span className="delivery-info">Delivered: {new Date(shipment.deliveredDate).toLocaleDateString()}</span>
                  ) : (
                    <span className="delivery-info">ETA: {new Date(shipment.estimatedDelivery).toLocaleDateString()}</span>
                  )}
                  <Link to={`/track/${shipment.trackingNumber}`} className="btn btn-sm btn-primary">
                    Track
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboardPage;
