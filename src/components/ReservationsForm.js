import React, { useState, useEffect } from 'react';
import { fetchAPI } from '../api/api';
import '../styles.css'; // Import the custom styles

const ReservationsForm = ({ availableTimes, dispatch }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(
    availableTimes && availableTimes.length > 0 ? availableTimes[0] : ''
  );
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // State variables for validation
  const [isDateValid, setIsDateValid] = useState(true);
  const [isTimeValid, setIsTimeValid] = useState(true);
  const [isGuestsValid, setIsGuestsValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAPI(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', payload: { availableTimes: data } });
      } catch (error) {
        console.error('Error fetching available times:', error);
      }
    };

    fetchData();
  }, [selectedDate, dispatch]);

  // Function to check and update form validity
  const updateFormValidity = () => {
    setIsFormValid(isDateValid && isTimeValid && isGuestsValid);
  };

  // Event handlers for input changes
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setIsDateValid(e.target.checkValidity());
    updateFormValidity();
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    setIsTimeValid(e.target.checkValidity());
    updateFormValidity();
  };

  const handleGuestsChange = (e) => {
    setNumberOfGuests(e.target.value);
    setIsGuestsValid(e.target.checkValidity());
    updateFormValidity();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission if the form is valid
    if (isFormValid) {
      console.log('Reservation submitted:', {
        date: selectedDate,
        time: selectedTime,
        guests: numberOfGuests,
        occasion: occasion,
      });
    }
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={selectedDate}
        onChange={handleDateChange}
        required
        className={`form-input ${!isDateValid ? 'invalid' : ''}`}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={selectedTime}
        onChange={handleTimeChange}
        required
        className={`form-input ${!isTimeValid ? 'invalid' : ''}`}
      >
        {availableTimes &&
          availableTimes.map((time) => (
            <option key={new Date(time).getTime()}>{new Date(time).toLocaleTimeString()}</option>
          ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numberOfGuests}
        onChange={handleGuestsChange}
        required
        className={`form-input ${!isGuestsValid ? 'invalid' : ''}`}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        className="form-input"
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" disabled={!isFormValid} />
    </form>
  );
};

export default ReservationsForm;
