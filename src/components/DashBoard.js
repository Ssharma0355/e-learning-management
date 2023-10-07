import React from 'react';
import './DashBoard.css';

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard">
      <h2>Welcome, {user}!</h2>
      <p>Dashboard Content Goes Here</p>
    </div>
  );
};

export default Dashboard;
