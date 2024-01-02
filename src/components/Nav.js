import React from 'react';
// import logo from '../public/logo.svg';

const Nav = () => {
  return (
    <nav className="nav-container">
      <img src="/Logo.svg" alt="logo" />
      <ul className="nav-list">
        <li><button type="button">Home</button></li>
        <li><button type="button">About</button></li>
        <li><button type="button">Menu</button></li>
        <li><button type="button">Reservations</button></li>
        <li><button type="button">Order online</button></li>
        <li><button type="button">Login</button></li>
      </ul>
    </nav>
  );
};

export default Nav;
