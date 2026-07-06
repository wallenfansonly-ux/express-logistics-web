import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardSidebar, DashboardHeader } from '../components';
import { useLanguage } from '../context';
import './AdminLayout.css';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="admin-layout">
      <DashboardSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="admin-main">
        <DashboardHeader title={t.admin.dashboard} />
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
