import { useState, useEffect } from 'react';
import { FaDownload, FaCalendarAlt, FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa';
import { useLanguage } from '../../context';
import { LoadingSpinner, StatsCard } from '../../components';
import './AdminReportsPage.css';

const ReportsPage = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('month');
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReportData({
        totalShipments: 1250,
        deliveredOnTime: 1180,
        averageDeliveryTime: '2.5 days',
        revenue: '$125,000',
        monthlyData: [
          { month: 'Jan', shipments: 95, delivered: 90 },
          { month: 'Feb', shipments: 105, delivered: 100 },
          { month: 'Mar', shipments: 115, delivered: 110 },
          { month: 'Apr', shipments: 125, delivered: 120 },
          { month: 'May', shipments: 135, delivered: 130 },
          { month: 'Jun', shipments: 145, delivered: 140 },
        ],
        statusBreakdown: {
          pending: 85,
          inTransit: 420,
          delivered: 700,
          cancelled: 45,
        }
      });
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [dateRange]);

  const handleExport = () => {
    alert('Export functionality - would download CSV/PDF report');
  };

  if (loading) {
    return (
      <div className="reports-page">
        <LoadingSpinner size="large" message={t.common.loading} />
      </div>
    );
  }

  return (
    <div className="reports-page">
      <div className="page-header">
        <h1>{t.admin.reports}</h1>
        <div className="header-actions">
          <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button className="btn btn-outline" onClick={handleExport}>
            <FaDownload /> {t.common.export}
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <StatsCard icon={<FaChartBar />} label="Total Shipments" value={reportData.totalShipments} color="primary" />
        <StatsCard icon={<FaChartLine />} label="On Time Delivery" value={`${(reportData.deliveredOnTime / reportData.totalShipments * 100).toFixed(1)}%`} color="success" />
        <StatsCard icon={<FaCalendarAlt />} label="Avg. Delivery Time" value={reportData.averageDeliveryTime} color="info" />
        <StatsCard icon={<FaChartPie />} label="Revenue" value={reportData.revenue} color="accent" />
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Monthly Shipments</h3>
          <div className="bar-chart">
            {reportData.monthlyData.map((data, index) => (
              <div key={index} className="bar-container">
                <div className="bar" style={{ height: `${(data.shipments / 150) * 100}%` }}>
                  <span className="bar-value">{data.shipments}</span>
                </div>
                <span className="bar-label">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-card">
          <h3>Status Breakdown</h3>
          <div className="status-chart">
            <div className="status-bar">
              <div className="status-segment pending" style={{ width: `${(reportData.statusBreakdown.pending / reportData.totalShipments) * 100}%` }}></div>
              <div className="status-segment in-transit" style={{ width: `${(reportData.statusBreakdown.inTransit / reportData.totalShipments) * 100}%` }}></div>
              <div className="status-segment delivered" style={{ width: `${(reportData.statusBreakdown.delivered / reportData.totalShipments) * 100}%` }}></div>
              <div className="status-segment cancelled" style={{ width: `${(reportData.statusBreakdown.cancelled / reportData.totalShipments) * 100}%` }}></div>
            </div>
            <div className="status-legend">
              <span className="legend-item pending">Pending: {reportData.statusBreakdown.pending}</span>
              <span className="legend-item in-transit">In Transit: {reportData.statusBreakdown.inTransit}</span>
              <span className="legend-item delivered">Delivered: {reportData.statusBreakdown.delivered}</span>
              <span className="legend-item cancelled">Cancelled: {reportData.statusBreakdown.cancelled}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
