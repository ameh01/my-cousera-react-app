import React from 'react';
import logo192 from '../public/logo192.png'

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>
          <img src={logo192} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <nav style={navStyle}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
        <div style={contactStyle}>
          <p>Contact Us:</p>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div style={socialMediaStyle}>
          <a href="#" target="_blank" rel="noopener noreferrer"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><img src="twitter-icon.png" alt="Twitter" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><img src="instagram-icon.png" alt="Instagram" /></a>
        </div>
        <div style={copyrightStyle}>
        <p>&copy; 2024 My App. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
};

// Styles
const footerStyle = {
  background: '#333',
  color: '#fff',
  padding: '20px 0',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
};

const logoStyle = {
  flex: '1',
};

const navStyle = {
  flex: '2',
};

const contactStyle = {
  flex: '1',
};

const socialMediaStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'space-around',
};

const copyrightStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

export default Footer;


