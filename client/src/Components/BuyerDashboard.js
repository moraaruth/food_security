import React from 'react';
import FarmerProfile from './FarmerProfile';
import Message from './Message';
import './Style.css';

const BuyerDashboard = () => {
  return (
    <div className="buyer-dashboard">
        <div className="buyer-section">
        <h2>Profile</h2>
      <FarmerProfile />
 
      <Message />
      </div>
      <div className="buyer-section">
        <h2>Products Bought</h2>
        <h2>Orders</h2>
        {/* Placeholder for BuyerProductList component */}
      </div>
   
      
    </div>
  );
};

export default BuyerDashboard;
