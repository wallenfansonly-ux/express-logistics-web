import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaBox } from 'react-icons/fa';
import { useLanguage } from '../context';
import StatusBadge from './StatusBadge';
import './ShipmentCard.css';

const ShipmentCard = ({ shipment }) => {
  const { t } = useLanguage();

  return (
    <div className="shipment-card">
      <div className="shipment-card-header">
        <div className="tracking-number">
          <FaBox />
          <span>{shipment.trackingNumber}</span>
        </div>
        <StatusBadge status={shipment.status} />
      </div>

      <div className="shipment-card-route">
        <div className="route-point origin">
          <FaMapMarkerAlt className="route-icon" />
          <div className="route-details">
            <span className="route-label">{t.tracking.origin}</span>
            <span className="route-city">{shipment.origin}</span>
          </div>
        </div>
        <div className="route-line"></div>
        <div className="route-point destination">
          <FaMapMarkerAlt className="route-icon" />
          <div className="route-details">
            <span className="route-label">{t.tracking.destination}</span>
            <span className="route-city">{shipment.destination}</span>
          </div>
        </div>
      </div>

      <div className="shipment-card-footer">
        <div className="shipment-date">
          <FaCalendarAlt />
          <span>{t.tracking.estimatedDelivery}: {new Date(shipment.estimatedDelivery).toLocaleDateString()}</span>
        </div>
        <Link to={`/track/${shipment.trackingNumber}`} className="btn btn-outline btn-sm">
          {t.common.view}
        </Link>
      </div>
    </div>
  );
};

export default ShipmentCard;
