import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import './PublicLayout.css';

const PublicLayout = () => {
  return (
    <div className="public-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
