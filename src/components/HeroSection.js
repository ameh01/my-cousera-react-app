import React from 'react';
import '../styles.css';

const HeroSection = () => {
  const handleBookTableClick = () => {
    // Implement the logic to navigate to the page for booking a table
    // You can use a routing library or any navigation method of your choice
    console.log("Redirecting to the booking page...");
  };

  return (
    <section className="hero-section">
      <div className="content-container">
        <div className="text-content">
          <h1>The Little Lemon</h1>
          <p>Located in the heart of the city, offering a delightful culinary experience with a focus on fresh and vibrant flavors.</p>
          <button onClick={handleBookTableClick} className="book-table-button">Book a Table Online</button>
        </div>
        <div className="image-container">
          <img src="restaurant-image.jpg" alt="Restaurant" className="image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
