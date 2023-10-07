import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebarr';
import DashboardContent from './components/DashboardContent';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleSignup = (username) => {
    setUser(username);
  };

  return (
    <div className="app">
      <Router>
        <Header />
        {!user ? (
          <div className="auth-container">
            <Login onLogin={handleLogin} />
            <Signup onSignup={handleSignup} />
          </div>
        ) : (
          <div className="dashboard-container">
            <Sidebar />
            <Route path="/dashboard">
              <DashboardContent user={user} />
            </Route>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
