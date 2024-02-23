// src/Context/authContext/index.jsx

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializerUser);

    // Cleanup function
    return () => {
      unsubscribe();
    };
  }, []);

  async function initializerUser(user) {
    try {
      // console.log("User from onAuthStateChanged:", user);

      if (user) {
        // If user is logged in
        setCurrentUser(user);
        setUserLoggedIn(true);
      } else {
        // If user is logged out
        setCurrentUser(null);
        setUserLoggedIn(false);
      }
    } catch (error) {
      console.error("Error initializing user:", error.message);
    } finally {
      // Set loading to false regardless of success or failure
      setLoading(false);
    }
  }

  const getUsername = () => {
    return currentUser ? currentUser.displayName : name;
  };

  const value = {
    currentUser,
    userLoggedIn,
    loading,
    getUsername, // Add the getUsername function to the context
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
