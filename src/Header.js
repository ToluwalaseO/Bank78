import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <div className="header">
      <h4 className="banks-title">Banks</h4> 
      
        
        <button className="add-bank-btn">+ Add Bank</button>
      
      
      <div className="rectangle"></div>
      <div className="rectangle2"></div>
    </div>
  );
};

export default Header;
