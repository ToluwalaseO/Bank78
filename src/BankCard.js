import React from 'react';
import './BankCard.css'; 

const BankCard = ({ bank }) => {
  return (
    <div className="bank-card-wrap">
      <div className="bank-card">
        <img src={bank.img} alt="Bank Logo" />
        <div className="bank-card-info">
          <p className="bank-name">{bank.name}</p>
          <p className="account-name">{bank.accountName}</p>
          <p className="account-number">{bank.accountNumber}</p>
        </div>
        <div className="option-button">
          {/* Add icons or buttons here */}
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      {bank.collections &&
      <div className="collections">
        <p><i class="fa-solid fa-eye"></i>Collections</p>
      </div>}
      {bank.isPrimary &&
      <div className="primary">
        <p>Primary</p>
        </div>
}
    </div>
  );
};

export default BankCard;
