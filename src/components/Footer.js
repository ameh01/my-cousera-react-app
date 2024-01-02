import React from 'react';
// import logo from '../public/logo.svg';
import '../styles.css';

const Footer = () => {
  // Function to handle social media button clicks
  const handleSocialMediaClick = (platform) => {
    // You can add logic to open the respective social media page
    console.log(`Redirecting to ${platform} page...`);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo">
          <img src="/logo.svg" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <nav className="nav">
          <ul>
            <li><button type="button">Home</button></li>
            <li><button type="button">About</button></li>
            <li><button type="button">Menu</button></li>
            <li><button type="button">Reservations</button></li>
            <li><button type="button">Order online</button></li>
            <li><button type="button">Login</button></li>
          </ul>
        </nav>
        <div className="contact">
          <p>Contact Us:</p>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="social-media">
          {/* Social media buttons */}
          <button type="button" onClick={() => handleSocialMediaClick('Facebook')}>
            <img src="facebook-icon.png" alt="Facebook" />
          </button>
          <button type="button" onClick={() => handleSocialMediaClick('Twitter')}>
            <img src="twitter-icon.png" alt="Twitter" />
          </button>
          <button type="button" onClick={() => handleSocialMediaClick('Instagram')}>
            <img src="instagram-icon.png" alt="Instagram" />
          </button>
        </div>
        <div className="copyright">
          <p>&copy; 2024 My App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
