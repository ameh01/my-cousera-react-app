import React from 'react';
import { Link } from 'react-router-dom';
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
          <img src="/Logo.svg" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <nav className="nav">
          <ul>
          <li><Link to="/" className="footer-link">Home</Link></li>
        <li><Link to="/AboutPage" className="footer-link">About</Link></li>
        <li><Link to="/MenuPage" className="footer-link">Menu</Link></li>
        <li><Link to="/ReservationsPage" className="footer-link">Reservations</Link></li>
        <li><Link to="/OrderOnlinePage" className="footer-link">Order online</Link></li>
        <li><Link to="/LoginPage" className="footer-link">Login</Link></li>
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
