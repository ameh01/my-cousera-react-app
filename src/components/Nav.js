import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav-container">

      <ul className="nav-list">
        <li>
          <Link to="/">
      <img src="/Logo.svg" alt="logo" />
      </Link>
      </li>
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
