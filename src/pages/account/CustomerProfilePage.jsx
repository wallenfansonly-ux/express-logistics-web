import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaSave, FaEdit } from 'react-icons/fa';
import { useLanguage, useAuth } from '../../context';
import './CustomerPages.css';

const CustomerProfilePage = () => {
  const { t } = useLanguage();
  const { user, userData } = useAuth();
  const [formData, setFormData] = useState({
    name: userData?.name || '',
    email: user?.email || '',
    phone: userData?.phone || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate save
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaved(true);
    setLoading(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="customer-profile">
      <div className="profile-header">
        <h1>Profile Settings</h1>
        <p>Manage your account information</p>
      </div>

      {saved && (
        <div className="success-message">
          Profile updated successfully!
        </div>
      )}

      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-section">
          <h3><FaUser /> Personal Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  disabled
                />
              </div>
              <span className="input-hint">Email cannot be changed</span>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="input-wrapper">
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3><FaLock /> Change Password</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="currentPassword">Current Password</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter current password"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            <FaSave /> {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerProfilePage;
