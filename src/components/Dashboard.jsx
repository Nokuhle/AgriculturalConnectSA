import React from 'react';
import { useUser } from '../contexts/UserContext';
import { useData } from '../contexts/DataContext';
import '../../src/Dashboard.css';

const Dashboard = () => {
  const { userProfile } = useUser();
  const { currentWeather, regionalAlerts, analytics } = useData();

  const userRegion = userProfile?.FarmLocation || userProfile?.region;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {userProfile?.firstName || userProfile?.name || 'Farmer'}!</h1>
        <p>Your farm in {userRegion} | {userProfile?.farmSize || '0'} hectares</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card weather-card">
          <h2>Current Weather</h2>
          {currentWeather && (
            <div className="weather-info">
              <div className="weather-temp">{currentWeather.temp}°C</div>
              <div className="weather-condition">{currentWeather.forecast}</div>
              <div className="weather-details">
                <p>Humidity: {currentWeather.humidity}%</p>
                <p>Rainfall: {currentWeather.rainfall}mm</p>
                <p>Wind: {currentWeather.windSpeed} km/h</p>
              </div>
            </div>
          )}
        </div>

        <div className="dashboard-card alerts-card">
          <h2>Active Alerts</h2>
          {regionalAlerts.length > 0 ? (
            regionalAlerts.slice(0, 2).map(alert => (
              <div key={alert.id} className={`alert-item ${alert.severity}`}>
                <h3>{alert.title}</h3>
                <p>{alert.message}</p>
                <span className="alert-date">Until: {alert.expires}</span>
              </div>
            ))
          ) : (
            <p>No active alerts for your region</p>
          )}
          {regionalAlerts.length > 2 && (
            <button className="view-all-btn">View All Alerts</button>
          )}
        </div>

        <div className="dashboard-card water-card">
          <h2>Water Management</h2>
          <div className="water-score">
            <div className="score-circle">
              <span>{analytics ? analytics.sustainabilityScore : '0'}</span>
            </div>
            <p>Sustainability Score</p>
          </div>
          <div className="water-savings">
            <h3>Water Savings</h3>
            <p>{analytics ? analytics.waterUsage.current : '0'} m³ used this month</p>
            <p className="savings">{analytics ? ((analytics.waterUsage.average - analytics.waterUsage.current) / analytics.waterUsage.average * 100).toFixed(1) : '0'}% less than average</p>
          </div>
        </div>

        <div className="dashboard-card crops-card">
          <h2>Your Crops</h2>
          {userProfile?.primaryCrop || userProfile?.crops?.length > 0 ? (
            <div className="crops-list">
              {userProfile.primaryCrop && (
                <div className="crop-item">
                  <span className="crop-name">{userProfile.primaryCrop}</span>
                  <span className="crop-status">Primary Crop</span>
                </div>
              )}
              {userProfile.crops && userProfile.crops.map((crop, index) => (
                <div key={index} className="crop-item">
                  <span className="crop-name">{crop}</span>
                  <span className="crop-status">Good Health</span>
                </div>
              ))}
            </div>
          ) : (
            <p>No crops added to your profile</p>
          )}
          <button className="btn-primary">Manage Crops</button>
        </div>

        <div className="dashboard-card analytics-card">
          <h2>Yield Prediction</h2>
          {analytics && (
            <>
              <div className="yield-prediction">
                <span className="yield-value">{analytics.predictedYield.current} tons/ha</span>
                <span className={`yield-trend ${analytics.predictedYield.trend}`}>
                  {analytics.predictedYield.trend === 'increasing' ? '↑' : '↓'} 
                  {((analytics.predictedYield.current - analytics.predictedYield.average) / analytics.predictedYield.average * 100).toFixed(1)}%
                </span>
              </div>
              <p>Compared to seasonal average</p>
            </>
          )}
        </div>

        <div className="dashboard-card tips-card">
          <h2>Daily Tip</h2>
          <div className="tip-content">
            <p>Water your crops early in the morning to reduce evaporation losses. Morning irrigation allows plants to absorb water before the heat of the day.</p>
          </div>
          <button className="btn-secondary">More Tips</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;