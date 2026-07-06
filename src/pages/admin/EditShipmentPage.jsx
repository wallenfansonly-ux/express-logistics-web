import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaSave, FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../../context';
import { LoadingSpinner } from '../../components';
import './ShipmentFormPage.css';

const EditShipmentPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    sender: '',
    receiver: '',
    email: '',
    phone: '',
    origin: '',
    destination: '',
    shipmentType: 'express',
    courier: 'express-logistics',
    weight: '',
    dimensions: '',
    dispatchDate: '',
    estimatedDelivery: '',
    notes: '',
    status: 'pending'
  });

  useEffect(() => {
    // Simulate fetching shipment data
    const timer = setTimeout(() => {
      setFormData({
        customerName: 'John Smith',
        sender: 'Acme Corp',
        receiver: 'John Smith',
        email: 'john@example.com',
        phone: '+1 555-123-4567',
        origin: 'New York, USA',
        destination: 'Los Angeles, USA',
        shipmentType: 'express',
        courier: 'express-logistics',
        weight: '5.2',
        dimensions: '30 x 20 x 15',
        dispatchDate: '2025-01-10',
        estimatedDelivery: '2025-01-15',
        notes: 'Fragile - Handle with care',
        status: 'in_transit'
      });
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSaving(false);
    navigate('/admin/shipments');
  };

  if (loading) {
    return (
      <div className="shipment-form-page">
        <LoadingSpinner size="large" message={t.common.loading} />
      </div>
    );
  }

  return (
    <div className="shipment-form-page">
      <div className="page-header">
        <button onClick={() => navigate(-1)} className="btn btn-outline">
          <FaArrowLeft /> {t.common.back}
        </button>
        <h1>{t.admin.editShipment}</h1>
      </div>

      <form className="shipment-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Customer Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="customerName">{t.shipment.customerName} *</label>
              <input type="text" id="customerName" name="customerName" value={formData.customerName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.shipment.email} *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t.shipment.phone}</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Sender & Receiver</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="sender">{t.shipment.sender} *</label>
              <input type="text" id="sender" name="sender" value={formData.sender} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="receiver">{t.shipment.receiver} *</label>
              <input type="text" id="receiver" name="receiver" value={formData.receiver} onChange={handleChange} required />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Shipping Details</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="origin">{t.shipment.origin} *</label>
              <input type="text" id="origin" name="origin" value={formData.origin} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="destination">{t.shipment.destination} *</label>
              <input type="text" id="destination" name="destination" value={formData.destination} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="status">{t.tracking.status} *</label>
              <select id="status" name="status" value={formData.status} onChange={handleChange}>
                <option value="pending">{t.status.pending}</option>
                <option value="picked_up">Picked Up</option>
                <option value="in_transit">{t.status.in_transit}</option>
                <option value="out_for_delivery">Out for Delivery</option>
                <option value="delivered">{t.status.delivered}</option>
                <option value="on_hold">On Hold</option>
                <option value="cancelled">{t.status.cancelled}</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="shipmentType">{t.shipment.shipmentType}</label>
              <select id="shipmentType" name="shipmentType" value={formData.shipmentType} onChange={handleChange}>
                <option value="express">Express</option>
                <option value="standard">Standard</option>
                <option value="international">International</option>
                <option value="freight">Freight</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Package Details</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="weight">{t.shipment.weight}</label>
              <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} min="0" step="0.1" />
            </div>
            <div className="form-group">
              <label htmlFor="dimensions">{t.shipment.dimensions}</label>
              <input type="text" id="dimensions" name="dimensions" value={formData.dimensions} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Schedule</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="dispatchDate">{t.shipment.dispatchDate} *</label>
              <input type="date" id="dispatchDate" name="dispatchDate" value={formData.dispatchDate} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="estimatedDelivery">{t.shipment.estimatedDelivery}</label>
              <input type="date" id="estimatedDelivery" name="estimatedDelivery" value={formData.estimatedDelivery} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>{t.shipment.notes}</h3>
          <div className="form-group full-width">
            <textarea id="notes" name="notes" rows="4" value={formData.notes} onChange={handleChange}></textarea>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-outline" onClick={() => navigate('/admin/shipments')}>
            {t.common.cancel}
          </button>
          <button type="submit" className="btn btn-primary" disabled={saving}>
            <FaSave /> {saving ? t.common.loading : t.shipment.update}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditShipmentPage;
