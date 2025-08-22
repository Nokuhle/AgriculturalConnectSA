// components/Analytics.js
import React from 'react';
import { useData } from '../contexts/DataContext';
import '../../src/Analytics.css';

const Analytics = () => {
  const { analytics, currentRegion } = useData();

  if (!analytics) {
    return <div>Loading analytics data...</div>;
  }

  return (
    <div className="analytics-page">
      <div className="page-header">
        <h1>Farm Analytics</h1>
        <p>Performance insights for {currentRegion}</p>
      </div>

      <div className="analytics-overview">
        <div className="metric-card">
          <h2>Water Usage</h2>
          <div className="metric-value">{analytics.waterUsage.current} m³</div>
          <div className={`metric-trend ${analytics.waterUsage.trend}`}>
            {analytics.waterUsage.trend === 'decreasing' ? '↓' : '↑'} 
            {Math.abs(analytics.waterUsage.current - analytics.waterUsage.average).toFixed(0)} m³ from average
          </div>
        </div>

        <div className="metric-card">
          <h2>Predicted Yield</h2>
          <div className="metric-value">{analytics.predictedYield.current} tons/ha</div>
          <div className={`metric-trend ${analytics.predictedYield.trend}`}>
            {analytics.predictedYield.trend === 'increasing' ? '↑' : '↓'} 
            {((analytics.predictedYield.current - analytics.predictedYield.average) / analytics.predictedYield.average * 100).toFixed(1)}%
          </div>
        </div>

        <div className="metric-card">
          <h2>Sustainability Score</h2>
          <div className="metric-value">{analytics.sustainabilityScore}/100</div>
          <div className="comparison">
            <span>Region: {analytics.comparison.region}</span>
            <span>National: {analytics.comparison.national}</span>
          </div>
        </div>
      </div>

      <div className="cost-savings">
        <h2>Estimated Cost Savings</h2>
        <div className="savings-cards">
          <div className="savings-card">
            <h3>Water</h3>
            <div className="savings-amount">R{analytics.costSavings.water}</div>
            <p>Annual savings</p>
          </div>
          
          <div className="savings-card">
            <h3>Energy</h3>
            <div className="savings-amount">R{analytics.costSavings.energy}</div>
            <p>Annual savings</p>
          </div>
          
          <div className="savings-card">
            <h3>Fertilizers</h3>
            <div className="savings-amount">R{analytics.costSavings.fertilizers}</div>
            <p>Annual savings</p>
          </div>
        </div>
      </div>

      <div className="historical-data">
        <h2>Historical Comparison</h2>
        <div className="historical-cards">
          <div className="historical-card">
            <h3>Water Usage Trend</h3>
            <div className="trend-bar">
              <div className="bar-label">Last Year</div>
              <div className="bar-container">
                <div 
                  className="bar-fill" 
                  style={{width: `${analytics.waterUsage.average / 30000 * 100}%`}}
                >
                  {analytics.waterUsage.average} m³
                </div>
              </div>
            </div>
            <div className="trend-bar">
              <div className="bar-label">Current</div>
              <div className="bar-container">
                <div 
                  className="bar-fill current" 
                  style={{width: `${analytics.waterUsage.current / 30000 * 100}%`}}
                >
                  {analytics.waterUsage.current} m³
                </div>
              </div>
            </div>
          </div>

          <div className="historical-card">
            <h3>Yield Comparison</h3>
            <div className="trend-bar">
              <div className="bar-label">Region Average</div>
              <div className="bar-container">
                <div 
                  className="bar-fill" 
                  style={{width: `${analytics.predictedYield.average / 12 * 100}%`}}
                >
                  {analytics.predictedYield.average} tons/ha
                </div>
              </div>
            </div>
            <div className="trend-bar">
              <div className="bar-label">Your Farm</div>
              <div className="bar-container">
                <div 
                  className="bar-fill current" 
                  style={{width: `${analytics.predictedYield.current / 12 * 100}%`}}
                >
                  {analytics.predictedYield.current} tons/ha
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recommendations">
        <h2>Improvement Recommendations</h2>
        <div className="recommendations-list">
          <div className="recommendation">
            <h3>Irrigation Efficiency</h3>
            <p>Upgrade to drip irrigation to save approximately 25% more water</p>
            <span className="impact">Potential impact: High</span>
          </div>
          
          <div className="recommendation">
            <h3>Soil Management</h3>
            <p>Add organic matter to improve water retention by 15-20%</p>
            <span className="impact">Potential impact: Medium</span>
          </div>
          
          <div className="recommendation">
            <h3>Crop Rotation</h3>
            <p>Implement legume rotation to reduce fertilizer needs by 30%</p>
            <span className="impact">Potential impact: High</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;