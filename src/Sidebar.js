import React from 'react';
import './sidebar.css'; // Create this file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
        <h5>IKOYI BRANCH</h5>
      <ul>
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Banks</li>
        <li>Settlements</li>
        <li>Request</li>
        <li>Collections</li>
        <li>Customers</li>
        <li>Members</li>
      </ul>
    </div>
  );
};

export default Sidebar;
