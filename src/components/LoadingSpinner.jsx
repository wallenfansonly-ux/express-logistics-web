import './Spinner.css';

const LoadingSpinner = ({ size = 'medium', message = '' }) => {
  return (
    <div className={`spinner-container ${size}`}>
      <div className="spinner"></div>
      {message && <p className="spinner-message">{message}</p>}
    </div>
  );
};

export default LoadingSpinner;
