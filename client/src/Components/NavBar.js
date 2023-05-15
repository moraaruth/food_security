import React from 'react';
import './Style.css'; 

function NavBar() {
  return (
    <nav>
     
      <ul>
      <h1 style={{ fontStyle: 'italic' }}>Ukulima Hub</h1>

        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
