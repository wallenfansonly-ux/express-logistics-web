import { Outlet, Link } from 'react-router-dom';
import { FaShippingFast, FaArrowLeft } from 'react-icons/fa';
import './AccountLayout.css';

const AccountLayout = () => {
  return (
    <div className="account-layout">
      <div className="account-header">
        <Link to="/" className="account-back">
          <FaArrowLeft /> Back to Home
        </Link>
        <Link to="/" className="account-logo">
          <FaShippingFast className="logo-icon" />
          <span>Express Logistics</span>
        </Link>
        <div className="account-header-spacer"></div>
      </div>
      <main className="account-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AccountLayout;
