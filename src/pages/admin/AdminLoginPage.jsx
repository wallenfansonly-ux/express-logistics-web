import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShippingFast, FaEnvelope, FaLock } from 'react-icons/fa';
import { useLanguage } from '../../context';
import { loginUser } from '../../firebase/auth';
import './AdminLoginPage.css';

const AdminLoginPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await loginUser(email, password);

    if (result.success) {
      navigate('/admin');
    } else {
      setError(t.auth.loginError);
    }
    setLoading(false);
  };

  // Demo login
  const handleDemoLogin = () => {
    setEmail('admin@example.com');
    setPassword('demo123');
  };

  return (
    <div className="admin-login-page">
      <div className="login-container">
        <div className="login-header">
          <FaShippingFast className="login-logo" />
          <h1>Express Logistics</h1>
          <p>{t.nav.login}</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="login-error">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">{t.auth.email}</label>
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">{t.auth.password}</label>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
            {loading ? t.common.loading : t.auth.loginButton}
          </button>

          <button type="button" className="btn btn-outline btn-block demo-btn" onClick={handleDemoLogin}>
            Use Demo Credentials
          </button>
        </form>

        <p className="login-footer">
          Need help? Contact system administrator
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
