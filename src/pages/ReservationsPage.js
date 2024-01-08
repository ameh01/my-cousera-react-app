// ReservationsPage.js
import React from 'react';
import ReservationsForm from '../components/ReservationsForm';

const ReservationsPage = ({ availableTimes, dispatch }) => {
  return (
    <div className="reservation-page">
      <h1>Reserve Now</h1>
      {/* Render the ReservationsForm component */}
      <ReservationsForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default ReservationsPage;
