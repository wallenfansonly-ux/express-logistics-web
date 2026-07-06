import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaSearch, FaFilter, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { useLanguage } from '../../context';
import { StatusBadge, LoadingSpinner } from '../../components';
import './AdminShipmentsPage.css';

const AdminShipmentsPage = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [shipments, setShipments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      const demoShipments = [
        { id: '1', trackingNumber: 'EXPLK8A2B3', customerName: 'John Smith', origin: 'New York, USA', destination: 'London, UK', status: 'in_transit', createdAt: '2025-01-10' },
        { id: '2', trackingNumber: 'EXPLM9C4D5', customerName: 'Jane Doe', origin: 'Los Angeles, USA', destination: 'Tokyo, Japan', status: 'pending', createdAt: '2025-01-11' },
        { id: '3', trackingNumber: 'EXPLN7E6F7', customerName: 'Bob Wilson', origin: 'Paris, France', destination: 'Sydney, Australia', status: 'out_for_delivery', createdAt: '2025-01-09' },
        { id: '4', trackingNumber: 'EXPLO8G9H0', customerName: 'Alice Brown', origin: 'Berlin, Germany', destination: 'Toronto, Canada', status: 'delivered', createdAt: '2025-01-05' },
        { id: '5', trackingNumber: 'EXPLP1I2J3', customerName: 'Charlie Davis', origin: 'Dubai, UAE', destination: 'Mumbai, India', status: 'in_transit', createdAt: '2025-01-08' },
      ];
      setShipments(demoShipments);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredShipments = shipments.filter((s) => {
    const matchesSearch = s.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || s.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id) => {
    if (window.confirm(t.shipment.confirmDelete)) {
      setShipments(shipments.filter((s) => s.id !== id));
    }
  };

  if (loading) {
    return (
      <div className="admin-shipments-page">
        <LoadingSpinner size="large" message={t.common.loading} />
      </div>
    );
  }

  return (
    <div className="admin-shipments-page">
      <div className="page-header">
        <h1>{t.admin.manageShipments}</h1>
        <Link to="/admin/shipments/create" className="btn btn-primary">
          <FaPlus /> {t.admin.createShipment}
        </Link>
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
        <div className="filter-box">
          <FaFilter className="filter-icon" />
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="all">{t.common.filter} - All</option>
            <option value="pending">{t.status.pending}</option>
            <option value="in_transit">{t.status.in_transit}</option>
            <option value="delivered">{t.status.delivered}</option>
            <option value="cancelled">{t.status.cancelled}</option>
          </select>
        </div>
      </div>

      <div className="shipments-table-container">
        <table className="shipments-table">
          <thead>
            <tr>
              <th>{t.tracking.trackingNumber}</th>
              <th>{t.shipment.customerName}</th>
              <th>{t.tracking.origin}</th>
              <th>{t.tracking.destination}</th>
              <th>{t.tracking.status}</th>
              <th>{t.common.actions}</th>
            </tr>
          </thead>
          <tbody>
            {filteredShipments.map((shipment) => (
              <tr key={shipment.id}>
                <td>{shipment.trackingNumber}</td>
                <td>{shipment.customerName}</td>
                <td>{shipment.origin}</td>
                <td>{shipment.destination}</td>
                <td>
                  <StatusBadge status={shipment.status} />
                </td>
                <td>
                  <div className="actions-cell">
                    <Link to={`/track/${shipment.trackingNumber}`} className="action-btn view">
                      <FaEye />
                    </Link>
                    <Link to={`/admin/shipments/edit/${shipment.id}`} className="action-btn edit">
                      <FaEdit />
                    </Link>
                    <button onClick={() => handleDelete(shipment.id)} className="action-btn delete">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminShipmentsPage;
