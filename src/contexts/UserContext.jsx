// src/contexts/UserContext.jsx
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    region: '',
    farmSize: 0,
    crops: [],
    irrigationSystem: '',
    experience: ''
  });

  const updateUserProfile = (updates) => {
    setUserProfile(prev => ({ ...prev, ...updates }));
  };

  const value = {
    userProfile,
    updateUserProfile
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};