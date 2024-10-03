import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2'; 
import Header from './Header';
import Header2 from './Header2';
import BankCard from './BankCard';
import './BanksPage.css'; 
import { FaSearch } from 'react-icons/fa';

const BanksPage = () => {
  const [banks] = useState([
    {
      collections: true,
      img: `${process.env.PUBLIC_URL}/providus2.png`,
      name: 'Providus Bank',
      accountName: 'Albert & Sons Limited',
      accountNumber: '0159910659',
      isPrimary: true
    },
    {
      img: `${process.env.PUBLIC_URL}/wema.png`,
      name: 'Wema Bank',
      accountName: 'Albert & Sons Limited',
      accountNumber: '0129901910'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBanks = banks.filter(bank =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="banks-page">
      <Sidebar2 /> 
      <Sidebar /> 
      
      <div className="main-content">
        <Header />
        <div className="new-content">
          <Header2 />
        </div>
        <div className="banks-list">
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="       Search out banks here"
              value={searchTerm}
              onChange={handleSearch}
              className="search-bar"
            />
            <FaSearch className="search-bar-icon" />
          </div>
          <div className="bank-cards">
            {filteredBanks.map((bank, index) => (
              <BankCard key={index} bank={bank} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanksPage;
