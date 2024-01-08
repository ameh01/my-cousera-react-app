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
        <nav className="footer-nav">
        <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/AboutPage" className="footer-link">About</Link>
            <Link to="/MenuPage" className="footer-link">Menu</Link>
            <Link to="/ReservationsPage" className="footer-link">Reservations</Link>
            <Link to="/OrderOnlinePage" className="footer-link">Order online</Link>
            <Link to="/LoginPage" className="footer-link">Login</Link>
          </div>
        </nav>
        <div className="contact">
          <p>Contact Us:</p>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="social-media">
          {/* Social media buttons */}
          <button type="button" onClick={() => handleSocialMediaClick('Facebook')}>
            <img src="facebook-48.png" alt="Facebook" />
          </button>
          <button type="button" onClick={() => handleSocialMediaClick('Twitter')}>
            <img src="twitter-48.png" alt="Twitter" />
          </button>
          <button type="button" onClick={() => handleSocialMediaClick('Instagram')}>
            <img src="instagram-48.png" alt="Instagram" />
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
