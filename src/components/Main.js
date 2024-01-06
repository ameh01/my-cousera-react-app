import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import MenuPage from '../pages/MenuPage';
import ReservationsPage from '../pages/ReservationsPage';
import OrderOnlinePage from '../pages/OrderOnlinePage';
import LoginPage from '../pages/LoginPage';
import Nav from './Nav';
import Footer from './Footer';

// Import the fetchAPI function from your api.js file
import { fetchAPI } from '../api/api'; // Adjust the path based on your project structure


const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload.availableTimes; // Set the state directly with the fetched data
    default:
      return state;
  }
};

export const initializeTimes = async (dispatch) => {
  try {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    const data = await fetchAPI(formattedDate);

    // Update the dispatch call to correctly provide the data
    dispatch({ type: 'UPDATE_TIMES', payload: { availableTimes: data } });
  } catch (error) {
    console.error('Error fetching available times:', error);
  }
};

export const updateTimes = (state, dispatchData) => {
  // Implement your updateTimes logic here
  // For now, it returns the same times
  return state;
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    // Initialize times directly
    initializeTimes(dispatch);
  }, []); // Empty dependency array ensures the effect runs only once after mount



  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} exact />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<ReservationsPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Main;
