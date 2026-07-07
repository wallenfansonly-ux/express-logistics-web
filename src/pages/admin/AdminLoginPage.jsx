import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleAdminLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      
      // Verify it's you
      if (result.user.email === 'davidibangaa@gmail.com') {
        navigate('/admin/dashboard'); // Ensure this matches your route path
      } else {
        alert("Access Denied.");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button 
        onClick={handleAdminLogin}
        style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Login as Admin
      </button>
    </div>
  );
};

export default AdminLoginPage;
