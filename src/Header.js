import React from 'react';
import './Header.css'; // Create this file for styling

const Header = () => {
  return (
    <div className="header">
      <h1>Banks</h1>
      <div className="merchant-info">
        <p className="merchant-text">Merchant</p> {/* Add class 'merchant-text' here */}
        <p>Kunbi Folorunsho</p>
        <button className="add-bank-btn">+ Add Bank</button>
      </div>
    </div>
  );
};

export default Header;
