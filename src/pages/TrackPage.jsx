import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaTruck, FaBox, FaClock, FaMapPin } from 'react-icons/fa';
import { useLanguage } from '../context';
import { TrackingSearch, StatusBadge, Timeline, LoadingSpinner, LiveTrackingMap } from '../components';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';
import './TrackPage.css';

const TrackPage = () => {
  const { trackingNumber } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showMap, setShowMap] = useState(true);

  useEffect(() => {
    if (trackingNumber) {
      fetchShipment(trackingNumber);
    }
  }, [trackingNumber]);

  // Trigger confetti on delivery
  useEffect(() => {
    if (shipment?.status === 'delivered') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#22c55e', '#3b82f6', '#f59e0b'],
      });
    }
  }, [shipment?.status]);

  const fetchShipment = (tracking) => {
    setLoading(true);
    setError(null);

    setTimeout(() => {
      const demoShipment = {
        trackingNumber: tracking.toUpperCase(),
        customerName: 'John Smith',
        sender: 'Acme Corp',
        receiver: 'John Smith',
        email: 'john@example.com',
        phone: '+1 555-123-4567',
        origin: 'New York, USA',
        destination: 'Los Angeles, USA',
        currentLocation: 'Phoenix, AZ',
        status: 'in_transit',
        shipmentType: 'Express Package',
        courier: 'Express Logistics',
        weight: '5.2 kg',
        dimensions: '30 x 20 x 15 cm',
        dispatchDate: '2025-01-10',
        estimatedDelivery: '2025-01-15',
        notes: 'Fragile - Handle with care',
        // Coordinates for map
        originCoords: { lat: 40.7128, lng: -74.0060, name: 'New York, NY' },
        destinationCoords: { lat: 34.0522, lng: -118.2437, name: 'Los Angeles, CA' },
        currentCoords: { lat: 33.4484, lng: -112.0740, name: 'Phoenix, AZ' },
        // Route waypoints for animated path
        routePath: [
          [40.7128, -74.0060],  // New York
          [41.8781, -87.6298],  // Chicago
          [39.7392, -104.9903], // Denver
          [33.4484, -112.0740], // Phoenix
          [34.0522, -118.2437], // Los Angeles
        ],
        // Movement log
        movementLog: [
          {
            id: 1,
            timestamp: '2025-01-12T14:30:00',
            city: 'Phoenix',
            country: 'USA',
            facility: 'Phoenix Distribution Center',
            status: 'in_transit',
            description: 'Package departed from Phoenix facility, heading to Los Angeles',
          },
          {
            id: 2,
            timestamp: '2025-01-12T08:30:00',
            city: 'Phoenix',
            country: 'USA',
            facility: 'Phoenix Hub',
            status: 'at_facility',
            description: 'Package arrived at Phoenix sorting facility',
          },
          {
            id: 3,
            timestamp: '2025-01-11T18:00:00',
            city: 'Denver',
            country: 'USA',
            facility: 'Denver Regional Center',
            status: 'in_transit',
            description: 'Departed Denver facility',
          },
          {
            id: 4,
            timestamp: '2025-01-11T14:00:00',
            city: 'Denver',
            country: 'USA',
            facility: 'Denver Sorting Hub',
            status: 'at_facility',
            description: 'Arrived at Denver sorting facility for customs clearance',
          },
          {
            id: 5,
            timestamp: '2025-01-11T06:00:00',
            city: 'Chicago',
            country: 'USA',
            facility: 'Chicago O\'Hare Hub',
            status: 'in_transit',
            description: 'Package in transit, cleared security check',
          },
          {
            id: 6,
            timestamp: '2025-01-10T18:00:00',
            city: 'Chicago',
            country: 'USA',
            facility: 'Chicago Distribution Center',
            status: 'at_facility',
            description: 'Package arrived at Chicago distribution center',
          },
          {
            id: 7,
            timestamp: '2025-01-10T10:00:00',
            city: 'New York',
            country: 'USA',
            facility: 'NYC Pickup Center',
            status: 'picked_up',
            description: 'Package picked up from sender',
          },
          {
            id: 8,
            timestamp: '2025-01-10T08:00:00',
            city: 'New York',
            country: 'USA',
            facility: 'NYC Processing',
            status: 'pending',
            description: 'Shipment created, awaiting pickup',
          },
        ],
        timeline: [
          { status: 'in_transit', location: 'Phoenix, AZ', timestamp: '2025-01-12T08:30:00', description: 'Package in transit to destination' },
          { status: 'at_facility', location: 'Denver, CO', timestamp: '2025-01-11T14:00:00', description: 'Arrived at sorting facility' },
          { status: 'in_transit', location: 'Chicago, IL', timestamp: '2025-01-11T06:00:00', description: 'In transit' },
          { status: 'picked_up', location: 'New York, NY', timestamp: '2025-01-10T10:00:00', description: 'Package picked up from sender' },
          { status: 'pending', location: 'New York, NY', timestamp: '2025-01-10T08:00:00', description: 'Shipment created' },
        ]
      };

      setShipment(demoShipment);
      setLoading(false);
      toast.success('Shipment found!', { icon: '' });
    }, 1000);
  };

  const handleSearch = (value) => {
    navigate(`/track/${value}`);
  };

  const getProgressPercentage = () => {
    if (!shipment) return 0;
    const statusOrder = ['pending', 'picked_up', 'in_transit', 'at_facility', 'out_for_delivery', 'delivered'];
    const currentIndex = statusOrder.indexOf(shipment.status);
    return Math.max(0, Math.min(100, ((currentIndex + 1) / statusOrder.length) * 100));
  };

  const formatDateTime = (dateString) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy HH:mm');
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <div className="track-page">
        <div className="container">
          <LoadingSpinner size="large" message={t.common.loading} />
        </div>
      </div>
    );
  }

  return (
    <div className="track-page">
      <div className="track-hero">
        <div className="container">
          <h1>{t.tracking.title}</h1>
          <p>{t.tracking.subtitle}</p>
          <TrackingSearch variant="standalone" />
        </div>
      </div>

      {error && (
        <div className="container">
          <div className="error-message">
            <p>{t.tracking.noResults}</p>
          </div>
        </div>
      )}

      {shipment && (
        <div className="container">
          <div className="track-results">
            <div className="shipment-overview glass-card">
              <div className="overview-header">
                <div className="tracking-info">
                  <FaBox className="tracking-icon" />
                  <div>
                    <span className="tracking-label">{t.tracking.trackingNumber}</span>
                    <span className="tracking-value">{shipment.trackingNumber}</span>
                  </div>
                </div>
                <StatusBadge status={shipment.status} size="large" />
              </div>

              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${getProgressPercentage()}%` }}></div>
                </div>
                <div className="progress-labels">
                  <span>{t.status.pending}</span>
                  <span>{t.status.delivered}</span>
                </div>
              </div>

              <div className="route-info">
                <div className="route-point">
                  <FaMapMarkerAlt className="route-icon origin" />
                  <div className="route-details">
                    <span className="route-label">{t.tracking.origin}</span>
                    <span className="route-city">{shipment.origin}</span>
                  </div>
                </div>
                <div className="route-arrow">
                  <FaTruck />
                </div>
                <div className="route-point">
                  <FaMapMarkerAlt className="route-icon destination" />
                  <div className="route-details">
                    <span className="route-label">{t.tracking.destination}</span>
                    <span className="route-city">{shipment.destination}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Tracking Map */}
            <div className="map-section">
              <div className="section-toggle">
                <h3>Live Tracking Map</h3>
                <button
                  className={`toggle-btn ${showMap ? 'active' : ''}`}
                  onClick={() => setShowMap(!showMap)}
                >
                  {showMap ? 'Hide Map' : 'Show Map'}
                </button>
              </div>
              {showMap && (
                <LiveTrackingMap
                  origin={shipment.originCoords}
                  destination={shipment.destinationCoords}
                  currentLocation={shipment.currentCoords}
                  route={shipment.routePath}
                  status={shipment.status}
                />
              )}
            </div>

            <div className="track-details-grid">
              <div className="track-card glass-card">
                <h3>{t.tracking.shipmentDetails}</h3>
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="detail-label">{t.tracking.currentLocation}</span>
                    <span className="detail-value">{shipment.currentLocation}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t.shipment.courier}</span>
                    <span className="detail-value">{shipment.courier}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t.shipment.shipmentType}</span>
                    <span className="detail-value">{shipment.shipmentType}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t.shipment.weight}</span>
                    <span className="detail-value">{shipment.weight}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t.shipment.dimensions}</span>
                    <span className="detail-value">{shipment.dimensions}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">
                      <FaCalendarAlt /> {t.tracking.estimatedDelivery}
                    </span>
                    <span className="detail-value">{new Date(shipment.estimatedDelivery).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <div className="track-card timeline-card glass-card">
                <h3>{t.tracking.timeline}</h3>
                <Timeline events={shipment.timeline} />
              </div>
            </div>

            {/* Movement Log */}
            <div className="movement-log glass-card">
              <h3><FaClock /> Movement Log</h3>
              <div className="movement-table-container">
                <table className="movement-table">
                  <thead>
                    <tr>
                      <th>Date & Time</th>
                      <th>Location</th>
                      <th>Facility</th>
                      <th>Status</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shipment.movementLog.map((entry) => (
                      <tr key={entry.id} className="movement-row">
                        <td className="datetime-cell">
                          <FaClock className="cell-icon" />
                          {formatDateTime(entry.timestamp)}
                        </td>
                        <td className="location-cell">
                          <FaMapPin className="cell-icon" />
                          {entry.city}, {entry.country}
                        </td>
                        <td className="facility-cell">{entry.facility}</td>
                        <td className="status-cell">
                          <span className={`movement-status ${entry.status}`}>
                            {entry.status.replace('_', ' ')}
                          </span>
                        </td>
                        <td className="description-cell">{entry.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackPage;
