import { useState, useEffect } from 'react';
import { FaPlus, FaSearch, FaEdit, FaTrash, FaTruck, FaCheck, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { useLanguage } from '../../context';
import { StatusBadge, LoadingSpinner } from '../../components';
import './AdminCouriersPage.css';

const AdminCouriersPage = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [couriers, setCouriers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [editingCourier, setEditingCourier] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    email: '',
    phone: '',
    vehicle: '',
    vehicleType: 'van',
    status: 'available'
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const demoCouriers = [
        {
          id: '1',
          name: 'Michael Johnson',
          employeeId: 'EMP001',
          email: 'michael.j@expresslogistics.com',
          phone: '+1 555-123-4567',
          vehicle: 'Van - ABC 1234',
          vehicleType: 'van',
          status: 'available',
          assignedShipments: 5,
          totalDeliveries: 1250
        },
        {
          id: '2',
          name: 'Sarah Williams',
          employeeId: 'EMP002',
          email: 'sarah.w@expresslogistics.com',
          phone: '+1 555-234-5678',
          vehicle: 'Truck - XYZ 5678',
          vehicleType: 'truck',
          status: 'busy',
          assignedShipments: 8,
          totalDeliveries: 980
        },
        {
          id: '3',
          name: 'David Chen',
          employeeId: 'EMP003',
          email: 'david.c@expresslogistics.com',
          phone: '+1 555-345-6789',
          vehicle: 'Bike - MNO 9012',
          vehicleType: 'bike',
          status: 'available',
          assignedShipments: 3,
          totalDeliveries: 2100
        },
        {
          id: '4',
          name: 'Emily Brown',
          employeeId: 'EMP004',
          email: 'emily.b@expresslogistics.com',
          phone: '+1 555-456-7890',
          vehicle: 'Van - DEF 3456',
          vehicleType: 'van',
          status: 'off_duty',
          assignedShipments: 0,
          totalDeliveries: 750
        }
      ];
      setCouriers(demoCouriers);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredCouriers = couriers.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleOpenModal = (courier = null) => {
    if (courier) {
      setEditingCourier(courier);
      setFormData({
        name: courier.name,
        employeeId: courier.employeeId,
        email: courier.email,
        phone: courier.phone,
        vehicle: courier.vehicle,
        vehicleType: courier.vehicleType,
        status: courier.status
      });
    } else {
      setEditingCourier(null);
      setFormData({
        name: '',
        employeeId: '',
        email: '',
        phone: '',
        vehicle: '',
        vehicleType: 'van',
        status: 'available'
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingCourier(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingCourier) {
      setCouriers(couriers.map(c =>
        c.id === editingCourier.id ? { ...c, ...formData } : c
      ));
      toast.success('Courier updated successfully!');
    } else {
      const newCourier = {
        id: Date.now().toString(),
        ...formData,
        assignedShipments: 0,
        totalDeliveries: 0
      };
      setCouriers([...couriers, newCourier]);
      toast.success('Courier created successfully!');
    }

    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this courier?')) {
      setCouriers(couriers.filter(c => c.id !== id));
      toast.success('Courier deleted successfully!');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'success';
      case 'busy': return 'warning';
      case 'off_duty': return 'neutral';
      default: return 'neutral';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'available': return 'Available';
      case 'busy': return 'Busy';
      case 'off_duty': return 'Off Duty';
      default: return status;
    }
  };

  if (loading) {
    return (
      <div className="admin-couriers-page">
        <LoadingSpinner size="large" message={t.common.loading} />
      </div>
    );
  }

  return (
    <div className="admin-couriers-page">
      <div className="page-header">
        <h1>Courier Management</h1>
        <button onClick={() => handleOpenModal()} className="btn btn-primary">
          <FaPlus /> Add Courier
        </button>
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
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="busy">Busy</option>
            <option value="off_duty">Off Duty</option>
          </select>
        </div>
      </div>

      <div className="couriers-grid">
        {filteredCouriers.map((courier) => (
          <div key={courier.id} className="courier-card">
            <div className="courier-header">
              <div className="courier-avatar">
                {courier.name.charAt(0)}
              </div>
              <div className="courier-info">
                <h3>{courier.name}</h3>
                <span className="employee-id">{courier.employeeId}</span>
              </div>
              <span className={`status-badge ${courier.status}`}>
                {getStatusLabel(courier.status)}
              </span>
            </div>

            <div className="courier-details">
              <div className="detail-row">
                <FaEnvelope className="detail-icon" />
                <span>{courier.email}</span>
              </div>
              <div className="detail-row">
                <FaPhone className="detail-icon" />
                <span>{courier.phone}</span>
              </div>
              <div className="detail-row">
                <FaTruck className="detail-icon" />
                <span>{courier.vehicle}</span>
              </div>
            </div>

            <div className="courier-stats">
              <div className="stat-item">
                <span className="stat-value">{courier.assignedShipments}</span>
                <span className="stat-label">Active</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{courier.totalDeliveries}</span>
                <span className="stat-label">Total</span>
              </div>
            </div>

            <div className="courier-actions">
              <button onClick={() => handleOpenModal(courier)} className="btn btn-outline btn-sm">
                <FaEdit /> Edit
              </button>
              <button onClick={() => handleDelete(courier.id)} className="btn btn-danger btn-sm">
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingCourier ? 'Edit Courier' : 'Add New Courier'}</h2>
              <button onClick={handleCloseModal} className="modal-close">&times;</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Employee ID *</label>
                    <input
                      type="text"
                      value={formData.employeeId}
                      onChange={(e) => setFormData({...formData, employeeId: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Vehicle *</label>
                    <input
                      type="text"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                      placeholder="e.g., Van - ABC 1234"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Vehicle Type</label>
                    <select
                      value={formData.vehicleType}
                      onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                    >
                      <option value="bike">Bike</option>
                      <option value="van">Van</option>
                      <option value="truck">Truck</option>
                      <option value="plane">Cargo Plane</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                  >
                    <option value="available">Available</option>
                    <option value="busy">Busy</option>
                    <option value="off_duty">Off Duty</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" onClick={handleCloseModal} className="btn btn-outline">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingCourier ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCouriersPage;
