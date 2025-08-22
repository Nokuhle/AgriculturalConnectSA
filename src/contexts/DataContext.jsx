// src/contexts/DataContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
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
  const [currentRegion, setCurrentRegion] = useState('Western Cape');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [regionalAlerts, setRegionalAlerts] = useState([]);
  const [waterData, setWaterData] = useState([]);
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    setCurrentWeather(weatherData[currentRegion]);
    setRegionalAlerts(alerts.filter(alert => alert.region === currentRegion));
    setWaterData(waterRecommendations[currentRegion] || []);
    setAnalytics(analyticsData[currentRegion]);
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