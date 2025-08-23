import React from 'react';
import { useData } from '../contexts/DataContext';
import { useUser } from '../contexts/UserContext';
import '../../src/Weather.css';

const Weather = () => {
  const { currentWeather, changeRegion, regions } = useData();
  const { userProfile } = useUser();

  // Use user's region instead of currentRegion from DataContext
  const userRegion = userProfile?.FarmLocation || userProfile?.region;

  const handleRegionChange = (e) => {
    changeRegion(e.target.value);
  };

  if (!currentWeather) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div className="weather-page">
      <div className="page-header">
        <h1>Weather Forecast</h1>
        <div className="region-selector">
          <label htmlFor="region-select">Select Region: </label>
          <select 
            id="region-select" 
            value={userRegion} 
            onChange={handleRegionChange}
          >
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="current-weather">
        <h2>Current Conditions in {userRegion}</h2>
        <div className="weather-card-large">
          <div className="weather-main">
            <div className="temperature">{currentWeather.temp}°C</div>
            <div className="conditions">
              <div className="condition">{currentWeather.forecast}</div>
              <div className="high-low">Humidity: {currentWeather.humidity}%</div>
            </div>
          </div>
          <div className="weather-details">
            <div className="detail">
              <span className="label">Rainfall</span>
              <span className="value">{currentWeather.rainfall} mm</span>
            </div>
            <div className="detail">
              <span className="label">Wind Speed</span>
              <span className="value">{currentWeather.windSpeed} km/h</span>
            </div>
            <div className="detail">
              <span className="label">UV Index</span>
              <span className="value">{currentWeather.uvIndex}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="forecast">
        <h2>7-Day Forecast</h2>
        <div className="forecast-cards">
          {currentWeather.forecast7Days.map((day, index) => (
            <div key={index} className="forecast-card">
              <h3>{day.day}</h3>
              <div className="forecast-temp">{day.temp}°C</div>
              <div className="forecast-condition">{day.condition}</div>
              <div className="forecast-rain">Rain: {day.rainfall}mm</div>
            </div>
          ))}
        </div>
      </div>

      <div className="seasonal-outlook">
        <h2>Seasonal Outlook</h2>
        <div className="outlook-card">
          <h3>Rainfall</h3>
          <p>{currentWeather.seasonalOutlook.rainfall}</p>
          
          <h3>Temperature</h3>
          <p>{currentWeather.seasonalOutlook.temperature}</p>
          
          <h3>Recommendations</h3>
          <p>{currentWeather.seasonalOutlook.recommendations}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;