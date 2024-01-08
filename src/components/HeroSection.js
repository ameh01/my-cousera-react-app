import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import '../styles.css';

const HeroSection = () => {

  const navigate = useNavigate(); // Initialize useNavigate

  const handleBookTableClick = () => {
    // Implement the logic to navigate to the page for booking a table
    // You can use a routing library or any navigation method of your choice
    // Redirect to the ReservationsPage
    navigate('/reservations'); // Change '/reservations' to the actual path of your ReservationsPage
  };

  return (
    <section className="hero-section">
      <div className="content-container">
        <div className="text-content">
          <h1>The Little Lemon</h1>
          <h2>chicago</h2>
          <p>Located in the heart of the city, offering a delightful culinary experience with a focus on fresh and vibrant flavors.</p>
          <button onClick={handleBookTableClick} className="book-table-button">Book a Table Online</button>
        </div>
        <div className="image-container">
          <img src="restaurant.jpg" alt="Restaurant" className="image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
