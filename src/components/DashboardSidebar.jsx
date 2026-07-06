import { NavLink, useNavigate } from 'react-router-dom';
import { FaShippingFast, FaChartLine, FaBox, FaUsers, FaFileAlt, FaCog, FaSignOutAlt, FaBars, FaMotorcycle } from 'react-icons/fa';
import { useLanguage, useAuth } from '../context';
import { logoutUser } from '../firebase/auth';
import './DashboardSidebar.css';

const DashboardSidebar = ({ isOpen, setIsOpen }) => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate('/admin/login');
  };

  const menuItems = [
    { path: '/admin', icon: <FaChartLine />, label: t.admin.dashboard, exact: true },
    { path: '/admin/shipments', icon: <FaBox />, label: t.admin.shipments },
    { path: '/admin/shipments/create', icon: <FaShippingFast />, label: t.admin.createShipment },
    { path: '/admin/customers', icon: <FaUsers />, label: t.admin.customers },
    { path: '/admin/couriers', icon: <FaMotorcycle />, label: 'Couriers' },
    { path: '/admin/reports', icon: <FaFileAlt />, label: t.admin.reports },
    { path: '/admin/settings', icon: <FaCog />, label: t.admin.settings },
  ];

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <FaShippingFast className="logo-icon" />
            <span>Express Logistics</span>
          </div>
        </div>

        <div className="sidebar-user">
          <div className="user-avatar">
            {user?.email?.charAt(0).toUpperCase() || 'A'}
          </div>
          <div className="user-info">
            <span className="user-name">Administrator</span>
            <span className="user-email">{user?.email || 'admin@example.com'}</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.exact}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt />
            <span>{t.nav.logout}</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
