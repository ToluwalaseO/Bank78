import React from 'react';
import './BankCard.css'; // Create this file for styling

const BankCard = ({ bank }) => {
  return (
    <div className = "bank-card-wrap">
        <div className="bank-card">
        <p> <img src={bank.img} 
             alt="Bank Logo" 
           />{bank.name} </p>
        <p>{bank.accountName}</p>
        <p>{bank.accountNumber}</p>
        </div>
    </div>
  );
};

export default BankCard;    
