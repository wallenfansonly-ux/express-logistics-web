import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleAdminLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // 1. Await the popup - this is crucial
      const result = await signInWithPopup(auth, provider);
      
      // 2. Check the user email
      if (result.user.email === 'davidibangaa@gmail.com') {
        console.log("Login successful, navigating...");
        navigate('/admin/dashboard'); 
      } else {
        alert("Access Denied: You are not the authorized admin.");
        await auth.signOut();
      }
    } catch (error) {
      // 3. Log the error to your console to see exactly what's failing
      console.error("Login failed:", error.code, error.message);
      alert(`Login error: ${error.message}`);
    }
  };

  return (
    <button onClick={handleAdminLogin}>Login as Admin</button>
  );
};
