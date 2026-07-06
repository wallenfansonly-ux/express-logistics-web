import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        try {
          // Check admin role
          const adminDoc = await getDoc(doc(db, 'admins', user.uid));
          if (adminDoc.exists() && adminDoc.data().role === 'admin') {
            setUserRole('admin');
            setUserData(adminDoc.data());
          } else {
            // Check customer role
            const customerDoc = await getDoc(doc(db, 'customers', user.uid));
            if (customerDoc.exists()) {
              setUserRole('customer');
              setUserData(customerDoc.data());
            } else {
              setUserRole('customer');
              setUserData(null);
            }
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
          setUserRole('customer');
          setUserData(null);
        }
      } else {
        setUserRole(null);
        setUserData(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    userRole,
    userData,
    isAdmin: userRole === 'admin',
    isCustomer: !!user && (userRole === 'customer' || userRole === null),
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
