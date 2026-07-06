import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaMapMarkerAlt, FaTruck, FaPlane } from 'react-icons/fa';
import './LiveTrackingMap.css';

// Fix leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom icons
const createIcon = (color, size = [25, 41]) => L.divIcon({
  className: 'custom-marker',
  html: `<div class="marker-pin ${color}"></div>`,
  iconSize: size,
  iconAnchor: [size[0] / 2, size[1]],
  popupAnchor: [0, -size[1]],
});

const originIcon = createIcon('origin');
const destinationIcon = createIcon('destination');
const currentIcon = createIcon('current', [30, 50]);

const LiveTrackingMap = ({ origin, destination, currentLocation, route, status }) => {
  const mapRef = useRef();
  const [animatedPosition, setAnimatedPosition] = useState(null);
  const animationRef = useRef();

  // Parse coordinates from route data
  const parseCoordinates = (location) => {
    if (!location || !location.lat || !location.lng) return null;
    return [location.lat, location.lng];
  };

  const originCoords = parseCoordinates(origin);
  const destCoords = parseCoordinates(destination);
  const currentCoords = parseCoordinates(currentLocation);

  // Route path coordinates
  const routePath = route || (originCoords && destCoords ? [originCoords, destCoords] : []);

  // Animate marker movement
  useEffect(() => {
    if (currentCoords && status === 'in_transit') {
      let progress = 0;
      const animate = () => {
        progress += 0.005;
        if (progress > 1) progress = 0;

        if (routePath.length >= 2) {
          const startIndex = Math.floor(progress * (routePath.length - 1));
          const endIndex = Math.min(startIndex + 1, routePath.length - 1);
          const localProgress = (progress * (routePath.length - 1)) % 1;

          const start = routePath[startIndex];
          const end = routePath[endIndex];

          const lat = start[0] + (end[0] - start[0]) * localProgress;
          const lng = start[1] + (end[1] - start[1]) * localProgress;

          setAnimatedPosition([lat, lng]);
        }
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    } else if (currentCoords) {
      setAnimatedPosition(currentCoords);
    }
  }, [currentCoords, status, routePath]);

  // Fit bounds to show entire route
  const FitBounds = () => {
    const map = useMap();
    useEffect(() => {
      if (routePath.length > 0) {
        const bounds = L.latLngBounds(routePath);
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }, [map, routePath.length]);
    return null;
  };

  if (!originCoords || !destCoords) {
    return (
      <div className="map-placeholder">
        <FaMapMarkerAlt />
        <p>Map data not available for this shipment</p>
      </div>
    );
  }

  return (
    <div className="live-tracking-map">
      <div className="map-header">
        <div className="live-indicator">
          <span className="pulse"></span>
          <span>Live Tracking</span>
        </div>
        {status === 'in_transit' && (
          <div className="transport-mode">
            <FaPlane /> Air Freight
          </div>
        )}
      </div>

      <MapContainer
        ref={mapRef}
        center={originCoords}
        zoom={5}
        className="map-container"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FitBounds />

        {/* Route line */}
        <Polyline
          positions={routePath}
          color="#3b82f6"
          weight={3}
          opacity={0.8}
          dashArray="10, 10"
        />

        {/* Origin marker */}
        <Marker position={originCoords} icon={originIcon}>
          <Popup>
            <div className="popup-content">
              <strong>Origin</strong>
              <p>{origin.name || 'Origin Location'}</p>
            </div>
          </Popup>
        </Marker>

        {/* Destination marker */}
        <Marker position={destCoords} icon={destinationIcon}>
          <Popup>
            <div className="popup-content">
              <strong>Destination</strong>
              <p>{destination.name || 'Destination Location'}</p>
            </div>
          </Popup>
        </Marker>

        {/* Current/Animated position marker */}
        {(animatedPosition || currentCoords) && (
          <Marker position={animatedPosition || currentCoords} icon={currentIcon}>
            <Popup>
              <div className="popup-content">
                <strong><FaTruck /> Current Location</strong>
                <p>{currentLocation?.name || 'In Transit'}</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default LiveTrackingMap;
