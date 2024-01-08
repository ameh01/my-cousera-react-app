import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles.css';

const dishItems = [
  {
    title: 'Chef Special',
    name: 'Lemon Pepper Salmon',
    description: 'Grilled salmon with a refreshing lemon zest glaze.',
    price: '$18.99',
    image: 'LemonPepperSalmon.webp',
  },
  {
    title: 'Vegetarian Delight',
    name: 'Mushroom Risotto',
    description: 'Creamy mushroom risotto with Parmesan cheese.',
    price: '$14.99',
    image: 'mushroom.jpg',
  },
  {
    title: 'Sweet Indulgence',
    name: 'Chocolate Lava Cake',
    description: 'Decadent chocolate lava cake with a gooey center.',
    price: '$8.99',
    image: 'chocolate-lava-cake.jpg',
  },
  // Add more dish items as needed

  {
    title: 'Spicy Delight',
    name: 'Chili Garlic Shrimp',
    description: 'Juicy shrimp cooked in a spicy chili garlic sauce.',
    price: '$22.99',
    image: 'chili-shrimp-1.jpg',
  },
  {
    title: 'Savory Delicacy',
    name: 'Truffle Infused Pasta',
    description: 'Pasta infused with truffle oil, topped with Parmesan.',
    price: '$16.99',
    image: 'truffle-pasta.jpg',
  },
  {
    title: 'Mouthwatering Combo',
    name: 'Surf and Turf Platter',
    description: 'A delightful combination of steak and lobster tail.',
    price: '$29.99',
    image: 'STplatter.jpg',
  },
  {
    title: 'Refreshing Salad',
    name: 'Mango Avocado Salad',
    description: 'Fresh mango and avocado salad with a zesty dressing.',
    price: '$12.99',
    image: 'mango-avocado-salad.jpg',
  },

];

const Highlights = () => {

  const navigate = useNavigate(); // Initialize useNavigate

  const handleDishClick = (dishName) => {
    // Implement the logic to navigate to the page for the selected dish
    // You can use a routing library or any navigation method of your choice
    console.log(`Redirecting to ${dishName} details page...`);
  };

  const handleOrderOnlineClick = () => {
    // Implement the logic to navigate to the order online page
    // You can use a routing library or any navigation method of your choice
    navigate('/order-online'); // Change '/order-online' to the actual path of your OrderOnlinePage
  };

  return (
    <section className="highlights">
      <div className="header">
        <h2>Specials</h2>
        <button onClick={handleOrderOnlineClick} className="order-online-button">
          Order Online
        </button>
      </div>
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
    </section>
  );
};

export default Highlights;
