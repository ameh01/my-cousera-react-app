import React from 'react';
import logo192 from '../public/logo192.png'

const Nav = () => {
  return (
    <nav>
        <img src={logo192} alt="logo" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;