import React from 'react';

const dishItems = [
  {
    title: 'Chef Special',
    name: 'Lemon Zest Salmon',
    description: 'Grilled salmon with a refreshing lemon zest glaze.',
    price: '$18.99',
    image: 'lemon-zest-salmon.jpg',
  },
  {
    title: 'Vegetarian Delight',
    name: 'Mushroom Risotto',
    description: 'Creamy mushroom risotto with Parmesan cheese.',
    price: '$14.99',
    image: 'mushroom-risotto.jpg',
  },
  {
    title: 'Sweet Indulgence',
    name: 'Chocolate Lava Cake',
    description: 'Decadent chocolate lava cake with a gooey center.',
    price: '$8.99',
    image: 'chocolate-lava-cake.jpg',
  },
  // Add more dish items as needed
];

const Highlights = () => {
  const handleDishClick = (dishName) => {
    // Implement the logic to navigate to the page for the selected dish
    // You can use a routing library or any navigation method of your choice
    console.log(`Redirecting to ${dishName} details page...`);
  };

  const handleOrderOnlineClick = () => {
    // Implement the logic to navigate to the order online page
    // You can use a routing library or any navigation method of your choice
    console.log("Redirecting to Order Online page...");
  };

  return (
    <section style={highlightsStyle}>
      <h2>Specials</h2>
      <div style={dishContainerStyle}>
        {dishItems.map((dish, index) => (
          <div key={index} style={dishItemStyle} onClick={() => handleDishClick(dish.name)}>
            <img src={dish.image} alt={dish.name} style={dishImageStyle} />
            <div style={dishContentStyle}>
              <h3>{dish.title}</h3>
              <p>{dish.name}</p>
              <p>{dish.description}</p>
              <p>{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleOrderOnlineClick} style={orderOnlineButtonStyle}>Order Online</button>
    </section>
  );
};

// Styles
const highlightsStyle = {
  background: '#fff',
  padding: '50px 0',
  textAlign: 'center',
};

const dishContainerStyle = {
  display: 'flex',
  overflowX: 'auto',
};

const dishItemStyle = {
  flex: '0 0 auto',
  margin: '0 10px',
  cursor: 'pointer',
};

const dishImageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px', // Optional: Add border-radius for rounded corners
};

const dishContentStyle = {
  marginTop: '10px',
};

const orderOnlineButtonStyle = {
  background: '#666',
  color: '#fff',
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
  marginTop: '20px',
};

export default Highlights;
