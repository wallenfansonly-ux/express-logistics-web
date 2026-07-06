import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider, ThemeProvider, AuthProvider, useAuth } from './context';
import { PublicLayout, AdminLayout, AccountLayout } from './layouts';
import { LoadingSpinner } from './components';
import './App.css';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const TrackPage = lazy(() => import('./pages/TrackPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Customer Portal Pages
const CustomerLoginPage = lazy(() => import('./pages/account/CustomerLoginPage'));
const CustomerRegisterPage = lazy(() => import('./pages/account/CustomerRegisterPage'));
const CustomerDashboardPage = lazy(() => import('./pages/account/CustomerDashboardPage'));
const CustomerProfilePage = lazy(() => import('./pages/account/CustomerProfilePage'));

// Admin Pages
const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage'));
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage'));
const AdminShipmentsPage = lazy(() => import('./pages/admin/AdminShipmentsPage'));
const CreateShipmentPage = lazy(() => import('./pages/admin/CreateShipmentPage'));
const EditShipmentPage = lazy(() => import('./pages/admin/EditShipmentPage'));
const AdminCustomersPage = lazy(() => import('./pages/admin/AdminCustomersPage'));
const AdminCouriersPage = lazy(() => import('./pages/admin/AdminCouriersPage'));
const AdminReportsPage = lazy(() => import('./pages/admin/AdminReportsPage'));
const AdminSettingsPage = lazy(() => import('./pages/admin/AdminSettingsPage'));

// Protected Route for Admin
const AdminRoute = ({ children }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) {
    return <div className="loading-screen"><LoadingSpinner size="large" message="Loading..." /></div>;
  }

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

// Protected Route for Customer
const CustomerRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="loading-screen"><LoadingSpinner size="large" message="Loading..." /></div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/account/login" replace />;
  }

  return children;
};

// Redirect authenticated users away from login pages
const GuestRoute = ({ children, redirectTo = '/' }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="loading-screen"><LoadingSpinner size="large" message="Loading..." /></div>;
  }

  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<div className="page-suspense"><LoadingSpinner size="large" message="Loading..." /></div>}>
    {children}
  </Suspense>
);

function AppContent() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      {/* Public Routes - No admin links */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<SuspenseWrapper><HomePage /></SuspenseWrapper>} />
        <Route path="track" element={<SuspenseWrapper><TrackPage /></SuspenseWrapper>} />
        <Route path="track/:trackingNumber" element={<SuspenseWrapper><TrackPage /></SuspenseWrapper>} />
        <Route path="services" element={<SuspenseWrapper><ServicesPage /></SuspenseWrapper>} />
        <Route path="about" element={<SuspenseWrapper><AboutPage /></SuspenseWrapper>} />
        <Route path="faq" element={<SuspenseWrapper><FAQPage /></SuspenseWrapper>} />
        <Route path="contact" element={<SuspenseWrapper><ContactPage /></SuspenseWrapper>} />
        <Route path="*" element={<SuspenseWrapper><NotFoundPage /></SuspenseWrapper>} />
      </Route>

      {/* Customer Account Routes */}
      <Route path="/account" element={<AccountLayout />}>
        <Route path="login" element={<GuestRoute redirectTo="/account/dashboard"><SuspenseWrapper><CustomerLoginPage /></SuspenseWrapper></GuestRoute>} />
        <Route path="register" element={<GuestRoute redirectTo="/account/dashboard"><SuspenseWrapper><CustomerRegisterPage /></SuspenseWrapper></GuestRoute>} />
        <Route path="dashboard" element={<CustomerRoute><SuspenseWrapper><CustomerDashboardPage /></SuspenseWrapper></CustomerRoute>} />
        <Route path="profile" element={<CustomerRoute><SuspenseWrapper><CustomerProfilePage /></SuspenseWrapper></CustomerRoute>} />
      </Route>

      {/* Admin Routes - Completely Separate */}
      <Route path="/admin/login" element={<GuestRoute redirectTo="/admin/dashboard"><SuspenseWrapper><AdminLoginPage /></SuspenseWrapper></GuestRoute>} />
      <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
        <Route index element={<SuspenseWrapper><AdminDashboardPage /></SuspenseWrapper>} />
        <Route path="dashboard" element={<SuspenseWrapper><AdminDashboardPage /></SuspenseWrapper>} />
        <Route path="shipments" element={<SuspenseWrapper><AdminShipmentsPage /></SuspenseWrapper>} />
        <Route path="shipments/create" element={<SuspenseWrapper><CreateShipmentPage /></SuspenseWrapper>} />
        <Route path="shipments/edit/:id" element={<SuspenseWrapper><EditShipmentPage /></SuspenseWrapper>} />
        <Route path="customers" element={<SuspenseWrapper><AdminCustomersPage /></SuspenseWrapper>} />
        <Route path="couriers" element={<SuspenseWrapper><AdminCouriersPage /></SuspenseWrapper>} />
        <Route path="reports" element={<SuspenseWrapper><AdminReportsPage /></SuspenseWrapper>} />
        <Route path="settings" element={<SuspenseWrapper><AdminSettingsPage /></SuspenseWrapper>} />
      </Route>
    </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <AppContent />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
