import { Link } from 'react-router-dom';
import { FaBoxes } from 'react-icons/fa';
import { useLanguage } from '../context';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const { t } = useLanguage();

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <FaBoxes className="not-found-icon" />
        <h1>404</h1>
        <h2>{t.notFound.title}</h2>
        <p>{t.notFound.message}</p>
        <Link to="/" className="btn btn-primary">
          {t.notFound.backHome}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
