import { FaCircle } from 'react-icons/fa';
import { useLanguage } from '../context';
import './StatusBadge.css';

const StatusBadge = ({ status, size = 'medium' }) => {
  const { t } = useLanguage();

  const statusConfig = {
    pending: { color: 'warning', label: t.status.pending },
    picked_up: { color: 'info', label: t.status.picked_up },
    in_transit: { color: 'primary', label: t.status.in_transit },
    out_for_delivery: { color: 'accent', label: t.status.out_for_delivery },
    delivered: { color: 'success', label: t.status.delivered },
    cancelled: { color: 'danger', label: t.status.cancelled },
    on_hold: { color: 'warning', label: t.status.on_hold },
    customs: { color: 'info', label: t.status.customs },
    at_facility: { color: 'neutral', label: t.status.at_facility }
  };

  const config = statusConfig[status] || statusConfig.pending;

  return (
    <span className={`status-badge ${config.color} ${size}`}>
      <FaCircle className="status-dot" />
      <span>{config.label}</span>
    </span>
  );
};

export default StatusBadge;
