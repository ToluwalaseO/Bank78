import React from 'react';
import './header2.css';

const Header2 = () => {
  return (
    <div className="header2">
      <div className="merchant-info">
        <p className="merchant-text">Merchant</p>
      </div>
      <p className="merchant-name">Kunbi Folorunsho</p>
      <p className="icon">
        <i className="fa-solid fa-circle-user" style={{ color: '#c4c4c4' }}></i>
      </p>
      <div className="icon-container">
        <p className="icon2">
          <i className="fa-solid fa-bell" style={{ color: '#676e76' }}></i>
        </p>
        <p className="Arrowdown">
          <i className="fa-solid fa-chevron-down"></i>
        </p>
        <p className="icon3">
          <i className="fa-solid fa-circle" style={{ color: '#db2838', '--fa-rotate-angle': '2838deg' }}></i>
        </p>
      </div>
    </div>
  );
};

export default Header2;
