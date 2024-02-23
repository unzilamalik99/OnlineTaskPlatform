// FirebaseConfig.jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, remove } from "firebase/database"; // Updated import

const app = initializeApp({
  apiKey: "AIzaSyCRF5etMqW6OUtbYJR-sje3uwIjOJ7jnWQ",
  authDomain: "online-task-platform.firebaseapp.com",
  projectId: "online-task-platform",
  storageBucket: "online-task-platform.appspot.com",
  messagingSenderId: "856964286968",
  appId: "1:856964286968:web:9ea53e72f2fb2af56aee0d",
  measurementId: "G-XFNM2R74EM",
});

const auth = getAuth(app);
const db = getFirestore(app);
const realtimeDb = getDatabase(app);

// Export ref and remove from the database module
export { auth, db, realtimeDb, ref, remove as deleteData };
