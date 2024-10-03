import React from 'react';
import './sidebar2.css'; // Ensure to define the spacing in this CSS file

const Sidebar = () => {
  return (
    <div className="sidebar2">
      <div className="sidebar2_container">
        {/* Sidebar Logo */}
        <div className="sidebar-logo-container">
          <img src={`${process.env.PUBLIC_URL}/bank78.png`} alt="Bank78 Logo" className="sidebar-logo" />
        </div>

        {/* Sidebar List */}
        <ul>
          <li><i className="fa-solid fa-house"></i><p></p></li>
          <li><i className="fa-solid fa-file"></i><p></p></li>
          <li><i className="fa-solid fa-list"></i><p></p></li>
          <li><i className="fa-solid fa-arrows-up-down-left-right"></i><p></p></li>
          <li><i className="fa-solid fa-angles-right"></i><p></p></li>
          <li><i className="fa-regular fa-square-check"></i><p></p></li>
          <li><i className="fa-solid fa-link"></i><p></p></li>
          <li><i className="fa-regular fa-square-check"></i><p></p></li>
          <li><i className="fa-solid fa-user"></i><p></p></li>
          <li><i className="fa-solid fa-users"></i><p></p></li>
        </ul>

        
        <div className="settings">
          <i className="fa-solid fa-gear"></i>
        </div>
        <div className="circle1">
          <i className="fa-solid fa-circle" style={{ color: '#ffa500' }}></i>
        </div>
        <div className="circle2">
          <i className="fa-solid fa-circle" style={{ color: '#fffedc' }}></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
