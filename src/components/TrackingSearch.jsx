import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useLanguage } from '../context';
import './TrackingSearch.css';

const TrackingSearch = ({ variant = 'hero' }) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/track/${trackingNumber.trim()}`);
    }
  };

  return (
    <div className={`tracking-search ${variant}`}>
      <form onSubmit={handleSubmit} className="tracking-form">
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder={t.home.enterTrackingPlaceholder}
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
            maxLength={20}
          />
        </div>
        <button type="submit" className="btn btn-primary search-btn">
          {variant === 'hero' ? t.home.trackPackage : t.tracking.trackButton}
        </button>
      </form>
    </div>
  );
};

export default TrackingSearch;
