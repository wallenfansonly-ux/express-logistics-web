import { FaCheck, FaTruck, FaMapMarkerAlt, FaBoxOpen } from 'react-icons/fa';
import { useLanguage } from '../context';
import './Timeline.css';

const Timeline = ({ events = [] }) => {
  const { t } = useLanguage();

  const getIcon = (status) => {
    const icons = {
      pending: <FaBoxOpen />,
      picked_up: <FaBoxOpen />,
      in_transit: <FaTruck />,
      out_for_delivery: <FaTruck />,
      delivered: <FaCheck />,
      customs: <FaMapMarkerAlt />,
      at_facility: <FaMapMarkerAlt />
    };
    return icons[status] || <FaTruck />;
  };

  const formatDateTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  return (
    <div className="timeline">
      {events.map((event, index) => {
        const { date, time } = formatDateTime(event.timestamp || event.date);
        return (
          <div key={index} className={`timeline-item ${index === 0 ? 'current' : ''}`}>
            <div className="timeline-marker">
              {getIcon(event.status)}
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h4 className="timeline-title">{event.description || event.title}</h4>
                <span className="timeline-location">{event.location}</span>
              </div>
              <div className="timeline-date">
                <span>{date}</span>
                <span>{time}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
