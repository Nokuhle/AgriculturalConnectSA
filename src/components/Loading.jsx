// components/Loading.jsx
import React from 'react';
import '../../src/Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <div className="loading-text">Loading AgriAlert SA</div>
        <div className="loading-subtext">Helping South African farmers thrive</div>
      </div>
      <div className="loading-decoration">
        <div className="decoration plant">🌱</div>
        <div className="decoration water">💧</div>
        <div className="decoration sun">☀️</div>
      </div>
    </div>
  );
};

export default Loading;