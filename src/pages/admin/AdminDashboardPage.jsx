import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBox, FaClock, FaTruck, FaCheck, FaExclamationTriangle, FaPlus, FaUsers, FaMotorcycle, FaChartLine, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from 'recharts';
import { useLanguage } from '../../context';
import { StatsCard, ShipmentCard, LoadingSpinner, StatusBadge } from '../../components';
import toast from 'react-hot-toast';
import './AdminDashboardPage.css';

const COLORS = ['#3b82f6', '#f59e0b', '#22c55e', '#ef4444'];

const AdminDashboardPage = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 1250,
    pending: 85,
    inTransit: 420,
    delivered: 700,
    cancelled: 45,
  });

  const [chartData, setChartData] = useState([]);
  const [statusData, setStatusData] = useState([]);
  const [recentShipments, setRecentShipments] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [couriers, setCouriers] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Demo shipments
      const demoShipments = [
        { id: '1', trackingNumber: 'EXPLK8A2B3', origin: 'New York, USA', destination: 'London, UK', status: 'in_transit', estimatedDelivery: '2025-01-20', customer: 'John Smith' },
        { id: '2', trackingNumber: 'EXPLM9C4D5', origin: 'Los Angeles, USA', destination: 'Tokyo, Japan', status: 'pending', estimatedDelivery: '2025-01-25', customer: 'Jane Doe' },
        { id: '3', trackingNumber: 'EXPLN7E6F7', origin: 'Paris, France', destination: 'Sydney, Australia', status: 'out_for_delivery', estimatedDelivery: '2025-01-15', customer: 'Acme Corp' },
        { id: '4', trackingNumber: 'EXPLO8G9H0', origin: 'Berlin, Germany', destination: 'Toronto, Canada', status: 'delivered', estimatedDelivery: '2025-01-10', customer: 'Bob Wilson' },
        { id: '5', trackingNumber: 'EXPLP1I2J3', origin: 'Dubai, UAE', destination: 'Mumbai, India', status: 'in_transit', estimatedDelivery: '2025-01-22', customer: 'Globex Inc' },
      ];
      setRecentShipments(demoShipments);

      // Monthly chart data
      const monthlyData = [
        { month: 'Jan', shipments: 95, delivered: 90 },
        { month: 'Feb', shipments: 105, delivered: 100 },
        { month: 'Mar', shipments: 115, delivered: 108 },
        { month: 'Apr', shipments: 125, delivered: 120 },
        { month: 'May', shipments: 135, delivered: 130 },
        { month: 'Jun', shipments: 145, delivered: 140 },
        { month: 'Jul', shipments: 155, delivered: 150 },
      ];
      setChartData(monthlyData);

      // Status breakdown for pie chart
      const statusBreakdown = [
        { name: 'Pending', value: stats.pending, color: '#f59e0b' },
        { name: 'In Transit', value: stats.inTransit, color: '#3b82f6' },
        { name: 'Delivered', value: stats.delivered, color: '#22c55e' },
        { name: 'Cancelled', value: stats.cancelled, color: '#ef4444' },
      ];
      setStatusData(statusBreakdown);

      // Recent activity
      const activity = [
        { id: 1, type: 'delivered', message: 'Shipment EXPLK8A2B3 delivered to London, UK', time: '5 min ago', icon: <FaCheck /> },
        { id: 2, type: 'picked_up', message: 'Package picked up from New York facility', time: '15 min ago', icon: <FaBox /> },
        { id: 3, type: 'in_transit', message: 'Shipment EXPLM9C4D5 departed Tokyo hub', time: '30 min ago', icon: <FaTruck /> },
        { id: 4, type: 'created', message: 'New shipment created for Acme Corp', time: '1 hour ago', icon: <FaPlus /> },
        { id: 5, type: 'delivered', message: 'Shipment EXPLO8G9H0 delivered to Toronto', time: '2 hours ago', icon: <FaCheck /> },
      ];
      setRecentActivity(activity);

      // Couriers overview
      const couriersData = [
        { id: 1, name: 'Mike Johnson', status: 'available', deliveries: 15, avatar: 'MJ' },
        { id: 2, name: 'Sarah Williams', status: 'busy', deliveries: 12, avatar: 'SW' },
        { id: 3, name: 'David Chen', status: 'available', deliveries: 18, avatar: 'DC' },
        { id: 4, name: 'Emily Brown', status: 'off_duty', deliveries: 10, avatar: 'EB' },
      ];
      setCouriers(couriersData);

      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [stats]);

  if (loading) {
    return (
      <div className="admin-dashboard-page">
        <div className="loading-container">
          <LoadingSpinner size="large" message={t.common.loading} />
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="admin-dashboard-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* KPI Cards */}
      <motion.div className="stats-grid" variants={itemVariants}>
        <Link to="/admin/shipments" className="stat-card-link">
          <StatsCard
            icon={<FaBox />}
            label={t.admin.totalShipments}
            value={stats.total}
            color="primary"
            trend={12}
          />
        </Link>
        <Link to="/admin/shipments?status=pending" className="stat-card-link">
          <StatsCard
            icon={<FaClock />}
            label={t.admin.pendingShipments}
            value={stats.pending}
            color="warning"
            trend={-5}
          />
        </Link>
        <Link to="/admin/shipments?status=in_transit" className="stat-card-link">
          <StatsCard
            icon={<FaTruck />}
            label={t.admin.inTransit}
            value={stats.inTransit}
            color="info"
            trend={8}
          />
        </Link>
        <Link to="/admin/shipments?status=delivered" className="stat-card-link">
          <StatsCard
            icon={<FaCheck />}
            label={t.admin.delivered}
            value={stats.delivered}
            color="success"
            trend={15}
          />
        </Link>
      </motion.div>

      {/* Charts Row */}
      <motion.div className="charts-row" variants={itemVariants}>
        <div className="chart-card glass-card">
          <div className="chart-header">
            <h3>Shipment Trends</h3>
            <div className="chart-actions">
              <select>
                <option>Last 7 months</option>
                <option>Last 12 months</option>
              </select>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="month" stroke="var(--text-secondary)" fontSize={12} />
              <YAxis stroke="var(--text-secondary)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="shipments"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                name="Shipments"
              />
              <Line
                type="monotone"
                dataKey="delivered"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
                name="Delivered"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card glass-card">
          <div className="chart-header">
            <h3>Status Breakdown</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="dashboard-main-grid">
        {/* Recent Shipments */}
        <motion.div className="dashboard-section glass-card" variants={itemVariants}>
          <div className="section-header">
            <h2>{t.admin.recentShipments}</h2>
            <Link to="/admin/shipments" className="view-all-link">View All</Link>
          </div>
          <div className="shipments-list">
            {recentShipments.map((shipment, index) => (
              <motion.div
                key={shipment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ShipmentCard shipment={shipment} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Sidebar */}
        <div className="dashboard-sidebar">
          {/* Couriers Overview */}
          <motion.div className="dashboard-section glass-card couriers-section" variants={itemVariants}>
            <div className="section-header">
              <h2><FaMotorcycle /> Active Couriers</h2>
              <Link to="/admin/couriers" className="view-all-link">Manage</Link>
            </div>
            <div className="couriers-list">
              {couriers.map((courier) => (
                <div key={courier.id} className="courier-mini-card">
                  <div className="courier-avatar">{courier.avatar}</div>
                  <div className="courier-info">
                    <span className="courier-name">{courier.name}</span>
                    <span className="courier-deliveries">{courier.deliveries} deliveries</span>
                  </div>
                  <span className={`courier-status ${courier.status}`}>
                    {courier.status.replace('_', ' ')}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div className="dashboard-section glass-card activity-section" variants={itemVariants}>
            <div className="section-header">
              <h2><FaChartLine /> Recent Activity</h2>
            </div>
            <div className="activity-list">
              {recentActivity.map((activity, index) => (
                <div key={activity.id} className="activity-item">
                  <div className={`activity-icon ${activity.type}`}>
                    {activity.icon}
                  </div>
                  <div className="activity-content">
                    <p className="activity-message">{activity.message}</p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <motion.div className="quick-actions-section glass-card" variants={itemVariants}>
        <h2>{t.admin.quickActions}</h2>
        <div className="actions-grid">
          <Link to="/admin/shipments/create" className="action-card">
            <div className="action-icon primary">
              <FaPlus />
            </div>
            <span>{t.admin.createShipment}</span>
          </Link>
          <Link to="/admin/shipments" className="action-card">
            <div className="action-icon info">
              <FaTruck />
            </div>
            <span>{t.admin.manageShipments}</span>
          </Link>
          <Link to="/admin/customers" className="action-card">
            <div className="action-icon success">
              <FaUsers />
            </div>
            <span>{t.admin.customers}</span>
          </Link>
          <Link to="/admin/couriers" className="action-card">
            <div className="action-icon warning">
              <FaMotorcycle />
            </div>
            <span>Couriers</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AdminDashboardPage;
