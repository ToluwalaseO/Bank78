import React from 'react';
import './sidebar.css'; // Create this file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
        <h5>IKOYI BRANCH</h5>
      <ul>
        <li><i class="fa-solid fa-square"></i> Dashboard</li>
        <li><i className="fa-solid fa-angles-right"></i> Profile</li>
        <li><i class="fa-solid fa-building-columns"></i> Banks</li>
        <li><i className="fa-solid fa-link"></i> Settlements</li>
        <li><i className="fa-regular fa-square-check"></i> Request</li>
        <li><i className="fa-solid fa-arrow-up"></i><i className="fa-solid fa-arrow-down"></i> Collections</li>
        <li><i className="fa-solid fa-user"></i> Customers</li>
        <li><i className="fa-solid fa-users"></i> Members</li>
      </ul>
    </div>
  );
};

export default Sidebar;
