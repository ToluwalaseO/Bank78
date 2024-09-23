import React from 'react';
import './sidebar2.css'; // Ensure to define the spacing in this CSS file

const Sidebar = () => {
  return (
    <div className="sidebar2">
      <ul>
        <li><i className="fa-solid fa-house"></i><p></p></li>
        <li><i className="fa-solid fa-file"></i><p></p></li>
        <li><i className="fa-solid fa-list"></i><p></p></li>
        <li><i className="fa-solid fa-arrow-up"></i><i className="fa-solid fa-arrow-down"></i><p></p></li>
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
    </div>
  );
};

export default Sidebar;
