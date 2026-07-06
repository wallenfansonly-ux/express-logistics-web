import './StatsCard.css';

const StatsCard = ({ icon, label, value, color = 'primary', trend }) => {
  return (
    <div className={`stats-card ${color}`}>
      <div className="stats-icon">{icon}</div>
      <div className="stats-content">
        <span className="stats-value">{value}</span>
        <span className="stats-label">{label}</span>
      </div>
      {trend && (
        <div className={`stats-trend ${trend > 0 ? 'positive' : 'negative'}`}>
          {trend > 0 ? '+' : ''}{trend}%
        </div>
      )}
    </div>
  );
};

export default StatsCard;
