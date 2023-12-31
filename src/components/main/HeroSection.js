import React from 'react';

const HeroSection = () => {
  const handleBookTableClick = () => {
    // Implement the logic to navigate to the page for booking a table
    // You can use a routing library or any navigation method of your choice
    console.log("Redirecting to the booking page...");
  };

  return (
    <section style={heroStyle}>
      <div style={contentContainerStyle}>
        <div style={textContentStyle}>
          <h1>The Little Lemon</h1>
          <p>Located in the heart of the city, offering a delightful culinary experience with a focus on fresh and vibrant flavors.</p>
          <button onClick={handleBookTableClick} style={bookTableButtonStyle}>Book a Table Online</button>
        </div>
        <div style={imageContainerStyle}>
          <img src="restaurant-image.jpg" alt="Restaurant" style={imageStyle} />
        </div>
      </div>
    </section>
  );
};

// Styles
const heroStyle = {
  background: '#f2f2f2',
  padding: '50px 0',
  textAlign: 'center',
  color: '#333',
};

const contentContainerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const textContentStyle = {
  maxWidth: '600px',
};

const imageContainerStyle = {
  flex: '1',
  textAlign: 'right',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px', // Optional: Add border-radius for rounded corners
};

const bookTableButtonStyle = {
  background: '#666',
  color: '#fff',
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
};

export default HeroSection;
