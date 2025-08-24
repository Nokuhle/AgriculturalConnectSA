import React from 'react';
import { useData } from '../contexts/DataContext';
import { useUser } from '../contexts/UserContext';
import '../../src/Alerts.css';

const Alerts = () => {
  const { regionalAlerts } = useData();
  const { userProfile } = useUser();

  // Use user's region instead of currentRegion from DataContext
  const userRegion = userProfile?.FarmLocation || userProfile?.region;

  const getSeverityIcon = (severity) => {
    switch(severity) {
      case 'high': return '🔴';
      case 'medium': return '🟠';
      case 'low': return '🟡';
      default: return '⚪';
    }
  };

  const getAlertTypeIcon = (type) => {
    switch(type) {
      case 'water-restriction': return '💧';
      case 'weather': return '🌦️';
      case 'drought': return '🏜️';
      case 'pest': return '🐛';
      case 'disease': return '🦠';
      case 'heat': return '🌡️';
      case 'fire': return '🔥';
      case 'water-quality': return '🚱';
      default: return '📢';
    }
  };

  return (
    <div className="alerts-page">
      <div className="page-header">
        <h1>Regional Alerts</h1>
        <p>Important notifications for {userRegion}</p>
      </div>

      <div className="alerts-content">
        {regionalAlerts.length > 0 ? (
          <div className="alerts-list">
            {regionalAlerts.map(alert => (
              <div key={alert.id} className={`alert-card ${alert.severity}`}>
                <div className="alert-header">
                  <span className="alert-type-icon">{getAlertTypeIcon(alert.type)}</span>
                  <h2>{alert.title}</h2>
                  <span className="severity-icon">{getSeverityIcon(alert.severity)}</span>
                </div>
                <div className="alert-body">
                  <p>{alert.message}</p>
                </div>
                <div className="alert-footer">
                  <span className="alert-date">Issued: {alert.date}</span>
                  <span className="alert-expiry">Expires: {alert.expires}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-alerts">
            <div className="no-alerts-icon">✅</div>
            <h2>No active alerts for your region</h2>
            <p>Check back later for important updates about your area</p>
          </div>
        )}

        <div className="alert-prevention">
          <h2>Prevention Tips</h2>
          <div className="prevention-tips">
            <div className="prevention-tip">
              <h3>Water Restrictions</h3>
              <ul>
                <li>Implement drip irrigation systems</li>
                <li>Collect and store rainwater</li>
                <li>Water during cooler parts of the day</li>
                <li>Use mulch to reduce evaporation</li>
              </ul>
            </div>
            
            <div className="prevention-tip">
              <h3>Pest Management</h3>
              <ul>
                <li>Monitor crops regularly for signs of pests</li>
                <li>Use integrated pest management strategies</li>
                <li>Introduce natural predators where possible</li>
                <li>Rotate crops to disrupt pest life cycles</li>
              </ul>
            </div>
            
            <div className="prevention-tip">
              <h3>Extreme Weather</h3>
              <ul>
                <li>Install windbreaks to protect crops</li>
                <li>Use shade nets during heatwaves</li>
                <li>Ensure proper drainage for heavy rainfall</li>
                <li>Have protective covers available for frost</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;