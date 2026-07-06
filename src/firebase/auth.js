import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from './config';

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const registerCustomer = async (email, password, customerData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (customerData.name) {
      await updateProfile(user, { displayName: customerData.name });
    }

    await setDoc(doc(db, 'customers', user.uid), {
      ...customerData,
      email,
      role: 'customer',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const registerAdmin = async (email, password, adminData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (adminData.name) {
      await updateProfile(user, { displayName: adminData.name });
    }

    await setDoc(doc(db, 'admins', user.uid), {
      ...adminData,
      email,
      role: 'admin',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const checkAdminRole = async (uid) => {
  try {
    const adminDoc = await getDoc(doc(db, 'admins', uid));
    return adminDoc.exists() && adminDoc.data().role === 'admin';
  } catch (error) {
    return false;
  }
};

export const checkCustomerRole = async (uid) => {
  try {
    const customerDoc = await getDoc(doc(db, 'customers', uid));
    return customerDoc.exists();
  } catch (error) {
    return false;
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, callback);
};
