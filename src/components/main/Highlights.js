import React from 'react';
import '../../styles.css';

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
    <section className="highlights">
      <h2>Specials</h2>
      <div className="dish-container">
        {dishItems.map((dish, index) => (
          <div key={index} className="dish-item" onClick={() => handleDishClick(dish.name)}>
            <img src={dish.image} alt={dish.name} className="dish-image" />
            <div className="dish-content">
              <h3>{dish.title}</h3>
              <p>{dish.name}</p>
              <p>{dish.description}</p>
              <p>{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleOrderOnlineClick} className="order-online-button">Order Online</button>
    </section>
  );
};

export default Highlights;
