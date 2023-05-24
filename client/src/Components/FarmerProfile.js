import React from 'react';
import './Style.css'

function FarmerProfile (){
    const profilePhotoUrl = 'https://cdn.pixabay.com/photo/2019/12/16/21/39/tree-4700352_640.jpg';
    const paymentQuantity = '10 new';
    const orderQuantity = '5 new';
    return (
        <div className='farmer-profile'>
              <div className="profile-header">
            <img className="profile-photo" src={profilePhotoUrl} alt="Profile" /> 
            <p className="profile-text">My Profile</p>
            </div>
            <div className='profile-info'>
            <h2 className='profile-name'>Dakari Imani</h2>
            <p className='profile-status'>Status: Active</p>
            </div>
           
            <div className="dashboard">
        <h3>Dashboard</h3>
        <div className="dashboard-item">
          <p>Payments</p>
          <span className="item-quantity">{paymentQuantity}</span>
        </div>
        <div className="dashboard-item">
          <p>Orders</p>
          <span className="item-quantity">{orderQuantity}</span>
        </div>
      </div>
           <div className="dashboard" >
               <h3>My Accounts</h3>
               <p style={{ color: '#008000', cursor: 'pointer' }} >Switch to other Account</p>
               <p style={{ color: '#b30000', cursor: 'pointer' }}>Log Out</p>
           </div>
        </div>
    )
}

export default FarmerProfile;