// src/contexts/DataContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from './UserContext';
import { 
  regions, 
  crops, 
  weatherData, 
  alerts, 
  waterRecommendations, 
  analyticsData 
} from '../../data/Data';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const { userProfile } = useUser();
  const [currentRegion, setCurrentRegion] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [regionalAlerts, setRegionalAlerts] = useState([]);
  const [waterData, setWaterData] = useState([]);
  const [analytics, setAnalytics] = useState(null);

  // Set the current region based on user's profile when it loads
  useEffect(() => {
    if (userProfile) {
      const userRegion = userProfile.FarmLocation || userProfile.region;
      if (userRegion) {
        setCurrentRegion(userRegion);
      }
    }
  }, [userProfile]);

  useEffect(() => {
    if (currentRegion) {
      // Simulate data fetching based on the user's region
      setCurrentWeather(weatherData[currentRegion] || null);
      setRegionalAlerts(alerts.filter(alert => alert.region === currentRegion));
      setWaterData(waterRecommendations[currentRegion] || []);
      setAnalytics(analyticsData[currentRegion] || null);
    }
  }, [currentRegion]);

  const changeRegion = (region) => {
    setCurrentRegion(region);
  };

  const value = {
    regions,
    crops,
    currentRegion,
    currentWeather,
    regionalAlerts,
    waterData,
    analytics,
    changeRegion
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};