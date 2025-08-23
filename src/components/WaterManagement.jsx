// components/WaterManagement.js
import React from 'react';
import { useData } from '../contexts/DataContext';
import { useUser } from '../contexts/UserContext';
import '../../src/WaterManagement.css';

const WaterManagement = () => {
  const { waterData, currentWeather } = useData();
  const { userProfile } = useUser();

  // Use user's region instead of currentRegion from DataContext
  const userRegion = userProfile?.FarmLocation || userProfile?.region;

  const calculateWaterSavings = () => {
    if (!waterData.length) return 0;
    return waterData.reduce((acc, curr) => {
      const savingsMatch = curr.savings.match(/(\d+)-(\d+)%/);
      if (savingsMatch) {
        return acc + (parseInt(savingsMatch[1]) + parseInt(savingsMatch[2])) / 2;
      }
      return acc;
    }, 0) / waterData.length;
  };

  const averageSavings = calculateWaterSavings();

  return (
    <div className="water-page">
      <div className="page-header">
        <h1>Water Management</h1>
        <p>Optimizing water usage for {userRegion}</p>
      </div>

      <div className="water-overview">
        <div className="water-score-card">
          <h2>Water Efficiency</h2>
          <div className="score-display">
            <div className="score-circle-large">
              <span>{averageSavings.toFixed(0)}%</span>
            </div>
            <p>Potential Water Savings</p>
          </div>
        </div>

        <div className="weather-impact">
          <h2>Current Weather Impact</h2>
          {currentWeather && (
            <div className="impact-card">
              <p>Today's conditions: {currentWeather.forecast}, {currentWeather.temp}°C</p>
              <p>Recommendation: {currentWeather.rainfall > 5 ? 'Reduce irrigation' : 'Maintain regular irrigation'}</p>
              <p>Evaporation rate: {currentWeather.temp > 30 ? 'High' : 'Moderate'}</p>
            </div>
          )}
        </div>
      </div>

      <div className="crop-recommendations">
        <h2>Water Recommendations for Your Crops</h2>
        {waterData.length > 0 ? (
          <div className="recommendations-list">
            {waterData
              .filter(item => 
                userProfile?.primaryCrop === item.crop || 
                (userProfile?.crops && userProfile.crops.includes(item.crop))
              )
              .map((item, index) => (
                <div key={index} className="recommendation-card">
                  <h3>{item.crop}</h3>
                  <p>{item.recommendation}</p>
                  <div className="savings-badge">{item.savings}</div>
                </div>
              ))
            }
          </div>
        ) : (
          <p>No specific water recommendations available for your region at this time.</p>
        )}
      </div>

      <div className="irrigation-methods">
        <h2>Efficient Irrigation Methods</h2>
        <div className="methods-grid">
          <div className="method-card">
            <h3>Drip Irrigation</h3>
            <p>Efficiency: 90-95%</p>
            <p>Best for: Orchards, vineyards, row crops</p>
            <p>Water savings: 30-50% compared to flood irrigation</p>
          </div>
          
          <div className="method-card">
            <h3>Sprinkler Irrigation</h3>
            <p>Efficiency: 70-85%</p>
            <p>Best for: Field crops, pastures</p>
            <p>Water savings: 15-30% compared to flood irrigation</p>
          </div>
          
          <div className="method-card">
            <h3>Soil Moisture Monitoring</h3>
            <p>Efficiency: Improves any system</p>
            <p>Benefits: Prevents overwatering, optim timing</p>
            <p>Water savings: 10-25%</p>
          </div>
        </div>
      </div>

      <div className="water-tips">
        <h2>Water Conservation Tips</h2>
        <ul>
          <li>Water early in the morning or late afternoon to reduce evaporation</li>
          <li>Use mulch to retain soil moisture</li>
          <li>Regularly check for leaks in irrigation systems</li>
          <li>Collect rainwater for irrigation use</li>
          <li>Group plants with similar water needs together</li>
          <li>Improve soil organic matter to increase water retention</li>
        </ul>
      </div>
    </div>
  );
};

export default WaterManagement;