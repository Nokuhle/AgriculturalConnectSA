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
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase'; 
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Always sign out on refresh for testing
    signOut(auth).catch(() => {});

    // Listen for Firebase authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userData = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
        };
        setUser(userData);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <UserProvider value={{ user, setUser }}>
      <DataProvider>
        <Router>
          <div className="App">
            {user && <Navigation />}
            <div className={user ? "main-content with-nav" : "main-content"}>
              <Routes>
                <Route 
                  path="/" 
                  element={user ? <Dashboard /> : <Navigate to="/login" replace />} 
                />
                <Route 
                  path="/login" 
                  element={user ? <Navigate to="/" replace /> : <Login />} 
                />
                <Route 
                  path="/signup" 
                  element={user ? <Navigate to="/" replace /> : <Signup />} 
                />
                <Route 
                  path="/weather" 
                  element={user ? <Weather /> : <Navigate to="/login" replace />} 
                />
                <Route 
                  path="/crops" 
                  element={user ? <Crops /> : <Navigate to="/login" replace />} 
                />
                <Route 
                  path="/water" 
                  element={user ? <WaterManagement /> : <Navigate to="/login" replace />} 
                />
                <Route 
                  path="/alerts" 
                  element={user ? <Alerts /> : <Navigate to="/login" replace />} 
                />
                <Route 
                  path="/analytics" 
                  element={user ? <Analytics /> : <Navigate to="/login" replace />} 
                />
                <Route 
                  path="*" 
                  element={user ? <Navigate to="/" replace /> : <Navigate to="/login" replace />} 
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
