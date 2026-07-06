import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  serverTimestamp
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/config';

const SHIPMENTS_COLLECTION = 'shipments';

export const createShipment = async (shipmentData) => {
  try {
    const shipment = {
      ...shipmentData,
      trackingNumber: generateTrackingNumber(),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      status: 'pending',
      timeline: [{
        status: 'pending',
        location: shipmentData.origin,
        timestamp: new Date().toISOString(),
        description: 'Shipment created'
      }]
    };

    const docRef = await addDoc(collection(db, SHIPMENTS_COLLECTION), shipment);
    return { success: true, id: docRef.id, trackingNumber: shipment.trackingNumber };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const updateShipment = async (id, updateData) => {
  try {
    const shipmentRef = doc(db, SHIPMENTS_COLLECTION, id);
    await updateDoc(shipmentRef, {
      ...updateData,
      updatedAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const deleteShipment = async (id) => {
  try {
    await deleteDoc(doc(db, SHIPMENTS_COLLECTION, id));
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getShipment = async (id) => {
  try {
    const docSnap = await getDoc(doc(db, SHIPMENTS_COLLECTION, id));
    if (docSnap.exists()) {
      return { success: true, data: { id: docSnap.id, ...docSnap.data() } };
    }
    return { success: false, error: 'Shipment not found' };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getShipmentByTracking = async (trackingNumber) => {
  try {
    const q = query(
      collection(db, SHIPMENTS_COLLECTION),
      where('trackingNumber', '==', trackingNumber.toUpperCase()),
      limit(1)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { success: true, data: { id: doc.id, ...doc.data() } };
    }
    return { success: false, error: 'Shipment not found' };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getAllShipments = async (pageSize = 20, lastDoc = null) => {
  try {
    let q = query(collection(db, SHIPMENTS_COLLECTION), orderBy('createdAt', 'desc'), limit(pageSize));

    if (lastDoc) {
      q = query(collection(db, SHIPMENTS_COLLECTION), orderBy('createdAt', 'desc'), startAfter(lastDoc), limit(pageSize));
    }

    const querySnapshot = await getDocs(q);
    const shipments = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return {
      success: true,
      data: shipments,
      lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1]
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const searchShipments = async (searchTerm) => {
  try {
    const q = query(
      collection(db, SHIPMENTS_COLLECTION),
      where('trackingNumber', '>=', searchTerm.toUpperCase()),
      where('trackingNumber', '<=', searchTerm.toUpperCase() + '\uf8ff'),
      limit(10)
    );

    const querySnapshot = await getDocs(q);
    const shipments = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return { success: true, data: shipments };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const addTimelineEvent = async (shipmentId, event) => {
  try {
    const shipmentRef = doc(db, SHIPMENTS_COLLECTION, shipmentId);
    const shipmentDoc = await getDoc(shipmentRef);

    if (shipmentDoc.exists()) {
      const currentTimeline = shipmentDoc.data().timeline || [];
      const updatedTimeline = [...currentTimeline, {
        ...event,
        timestamp: new Date().toISOString()
      }];

      await updateDoc(shipmentRef, {
        timeline: updatedTimeline,
        status: event.status,
        currentLocation: event.location,
        updatedAt: serverTimestamp()
      });

      return { success: true };
    }
    return { success: false, error: 'Shipment not found' };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const uploadProofOfDelivery = async (shipmentId, file) => {
  try {
    const storageRef = ref(storage, `pod/${shipmentId}/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    await updateShipment(shipmentId, {
      proofOfDelivery: downloadURL,
      deliveredDate: new Date().toISOString(),
      status: 'delivered'
    });

    return { success: true, url: downloadURL };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getDashboardStats = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, SHIPMENTS_COLLECTION));
    const shipments = querySnapshot.docs.map(doc => doc.data());

    const stats = {
      total: shipments.length,
      pending: shipments.filter(s => s.status === 'pending').length,
      inTransit: shipments.filter(s => s.status === 'in_transit').length,
      delivered: shipments.filter(s => s.status === 'delivered').length,
      cancelled: shipments.filter(s => s.status === 'cancelled').length
    };

    return { success: true, data: stats };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const generateTrackingNumber = () => {
  const prefix = 'EXP';
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}${timestamp}${random}`;
};
