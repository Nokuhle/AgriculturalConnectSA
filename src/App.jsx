// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Weather from './components/Weather';
import Crops from './components/Crops';
import WaterManagement from './components/WaterManagement';
import Alerts from './components/Alerts';
import Analytics from './components/Analytics';
import Navigation from './components/Navigation';
import Loading from './components/Loading';
import { UserProvider } from './contexts/UserContext';
import { DataProvider } from './contexts/DataContext';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate authentication check
    const userData = localStorage.getItem('agriAlertUser');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <UserProvider>
      <DataProvider>
        <Router>
          <div className="App">
            {user && <Navigation />}
            <div className={user ? "main-content with-nav" : "main-content"}>
              <Routes>
                <Route 
                  path="/" 
                  element={user ? <Dashboard /> : <Navigate to="/login" />} 
                />
                <Route 
                  path="/login" 
                  element={user ? <Navigate to="/" /> : <Login setUser={setUser} />} 
                />
                <Route 
                  path="/signup" 
                  element={user ? <Navigate to="/" /> : <Signup setUser={setUser} />} 
                />
                <Route 
                  path="/weather" 
                  element={user ? <Weather /> : <Navigate to="/login" />} 
                />
                <Route 
                  path="/crops" 
                  element={user ? <Crops /> : <Navigate to="/login" />} 
                />
                <Route 
                  path="/water" 
                  element={user ? <WaterManagement /> : <Navigate to="/login" />} 
                />
                <Route 
                  path="/alerts" 
                  element={user ? <Alerts /> : <Navigate to="/login" />} 
                />
                <Route 
                  path="/analytics" 
                  element={user ? <Analytics /> : <Navigate to="/login" />} 
                />
              </Routes>
            </div>
          </div>
        </Router>
      </DataProvider>
    </UserProvider>
  );
}

export default App;