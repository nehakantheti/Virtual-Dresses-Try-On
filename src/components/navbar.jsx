// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className='home-link'>Fitly</Link>
      </div>
    </nav>
  );
}

export default Navbar;
