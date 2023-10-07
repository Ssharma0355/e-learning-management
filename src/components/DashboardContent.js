import React from 'react';
import './DashboardContent.css';
import Chart from './Chart';

const DashboardContent = ({ user }) => {
  return (
    <div className="dashboard-content">
      <h2>Welcome, {user}!</h2>
      <Chart />
      {/* Add more dashboard components */}
    </div>
  );
};

export default DashboardContent;
