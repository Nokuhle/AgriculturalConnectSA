import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../src/Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-icon">🌱</span>
          AgriAlert SA
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">📊</span>
            Dashboard
          </Link>
          
          <Link 
            to="/weather" 
            className={`nav-link ${isActive('/weather') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">🌦️</span>
            Weather
          </Link>
          
          <Link 
            to="/crops" 
            className={`nav-link ${isActive('/crops') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">🌾</span>
            Crops
          </Link>
          
          <Link 
            to="/water" 
            className={`nav-link ${isActive('/water') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">💧</span>
            Water
          </Link>
          
          <Link 
            to="/alerts" 
            className={`nav-link ${isActive('/alerts') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">🔔</span>
            Alerts
          </Link>
          
          <Link 
            to="/analytics" 
            className={`nav-link ${isActive('/analytics') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">📈</span>
            Analytics
          </Link>
        </div>
        
        <div 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;