// src/contexts/UserContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, listen to their Firestore document
        const userDocRef = doc(db, "users", user.uid);
        const unsubscribeFirestore = onSnapshot(userDocRef, (doc) => {
          if (doc.exists()) {
            setUserProfile(doc.data());
          } else {
            console.log("No user document found");
            setUserProfile(null);
          }
          setLoading(false);
        }, (error) => {
          console.error("Error listening to user document:", error);
          setLoading(false);
        });

        return () => unsubscribeFirestore();
      } else {
        // User is signed out
        setUserProfile(null);
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const updateUserProfile = async (updates) => {
    if (!auth.currentUser) return;
    
    try {
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      // This would need to be implemented with updateDoc in a real scenario
      // For now, we'll just update the local state
      setUserProfile(prev => ({ ...prev, ...updates }));
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const value = {
    userProfile,
    updateUserProfile,
    loading
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};