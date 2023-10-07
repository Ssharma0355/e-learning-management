import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebarr = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        {/* Add more links for other dashboard components */}
      </ul>
    </div>
  );
};

export default Sidebarr;
