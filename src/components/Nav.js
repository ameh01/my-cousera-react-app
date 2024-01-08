import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
      <Link to="/">
        <img src="/Logo.svg" alt="logo" className="logo" />
      </Link>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/menu" className="nav-link">Menu</Link></li>
        <li><Link to="/reservations" className="nav-link">Reservations</Link></li>
        <li><Link to="/order-online" className="nav-link">Order online</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
