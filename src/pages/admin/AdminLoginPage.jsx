import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleAdminLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Restrict access to ONLY your email
      if (user.email === 'davidibangaa@gmail.com') {
        navigate('/admin/dashboard');
      } else {
        alert("Access Denied: You are not the authorized admin.");
        auth.signOut(); // Log out immediately if it's not you
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <button 
      onClick={handleAdminLogin}
      className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg"
    >
      Login as Admin
    </button>
  );
};

export default AdminLogin;
