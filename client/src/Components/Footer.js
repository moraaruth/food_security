import React from 'react';
import './Style.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">© 2023 Ukulima Hub</h3>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-list">
            <li>Email: info@ukulima.com</li>
          
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Terms and Conditions</h3>
          <ul className="footer-list">
            <li>Privacy Policy</li>
            
           
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Subscribe to our Newsletter</h3>
          <form className="footer-form">
            <input type="email" placeholder="Enter your email" className="footer-input" />
            <button type="submit" className="footer-button">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
