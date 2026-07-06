import { useState } from 'react';
import { FaSave, FaBell, FaShieldAlt, FaPalette, FaLanguage } from 'react-icons/fa';
import { useLanguage, useTheme } from '../../context';
import './AdminSettingsPage.css';

const SettingsPage = () => {
  const { t, currentLanguage, changeLanguage, languages } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1>{t.admin.settings}</h1>
      </div>

      {saved && (
        <div className="save-message">
          {t.common.success}! Settings saved.
        </div>
      )}

      <div className="settings-grid">
        <div className="settings-section">
          <div className="section-header">
            <FaPalette />
            <h2>{t.common.theme}</h2>
          </div>
          <div className="setting-item">
            <label>{t.common.theme}</label>
            <div className="theme-options">
              <button
                className={`theme-option ${!isDark ? 'active' : ''}`}
                onClick={() => isDark && toggleTheme()}
              >
                {t.common.light}
              </button>
              <button
                className={`theme-option ${isDark ? 'active' : ''}`}
                onClick={() => !isDark && toggleTheme()}
              >
                {t.common.dark}
              </button>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <FaLanguage />
            <h2>{t.common.language}</h2>
          </div>
          <div className="setting-item">
            <label>{t.common.language}</label>
            <select value={currentLanguage} onChange={(e) => changeLanguage(e.target.value)}>
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.nativeName} ({lang.name})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <FaBell />
            <h2>Notifications</h2>
          </div>
          <div className="setting-item toggle">
            <label>Email Notifications</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications.email}
                onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="setting-item toggle">
            <label>Push Notifications</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications.push}
                onChange={(e) => setNotifications({ ...notifications, push: e.target.checked })}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="setting-item toggle">
            <label>SMS Notifications</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications.sms}
                onChange={(e) => setNotifications({ ...notifications, sms: e.target.checked })}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <FaShieldAlt />
            <h2>Security</h2>
          </div>
          <div className="setting-item">
            <button className="btn btn-outline">Change Password</button>
          </div>
          <div className="setting-item">
            <button className="btn btn-outline">Enable Two-Factor Authentication</button>
          </div>
        </div>
      </div>

      <div className="settings-actions">
        <button className="btn btn-primary" onClick={handleSave}>
          <FaSave /> {t.common.save}
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
