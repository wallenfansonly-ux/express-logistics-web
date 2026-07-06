import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShippingFast, FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import { useLanguage } from '../../context';
import { loginUser } from '../../firebase/auth';
import './AuthPages.css';

const CustomerLoginPage = () => {
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
      navigate('/account/dashboard');
    } else {
      setError(t.auth.loginError);
    }
    setLoading(false);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <FaShippingFast className="auth-logo" />
          <h1>Customer Portal</h1>
          <p>Sign in to track your shipments</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <div className="auth-error">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">{t.auth.email}</label>
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div className="auth-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>{t.auth.rememberMe}</span>
            </label>
            <Link to="/account/forgot-password" className="forgot-link">
              {t.auth.forgotPassword}
            </Link>
          </div>

          <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
            {loading ? t.common.loading : t.auth.loginButton}
          </button>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <button type="button" className="btn btn-outline btn-block google-btn">
            <FaGoogle /> Continue with Google
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/account/register">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default CustomerLoginPage;
