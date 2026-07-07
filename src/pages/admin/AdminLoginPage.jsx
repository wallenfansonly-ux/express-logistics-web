import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({ loading: false, error: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: '' });

    try {
      // Manual attempt: Type this in manually on your phone to avoid autofill issues
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      
      console.log("Login successful:", userCredential.user.uid);
      window.location.href = '/admin/dashboard';
    } catch (err) {
      // Log the full error to the console for debugging
      console.error("Full Firebase Error:", err);
      
      // Provide user-friendly feedback
      let message = "An error occurred. Please try again.";
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password') {
        message = "Incorrect email or password.";
      } else if (err.code === 'auth/user-not-found') {
        message = "No account found with this email.";
      }
      setStatus({ loading: false, error: message });
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
            required
          />
        </div>
        <button type="submit" disabled={status.loading} style={{ width: '100%', padding: '10px' }}>
          {status.loading ? 'Authenticating...' : 'Login'}
        </button>
      </form>
      
      {status.error && (
        <p style={{ color: 'red', marginTop: '10px', fontWeight: 'bold' }}>
          {status.error}
        </p>
      )}
    </div>
  );
};

export default AdminLogin;
