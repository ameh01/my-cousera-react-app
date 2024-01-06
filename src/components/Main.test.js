// Main.test.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { initializeTimes, updateTimes } from './Main'; // Import the functions
import Main from './Main'; // Import Main after the functions

// Mock the fetchAPI function
jest.mock('./api/api', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']),
}));


test('initializeTimes returns initial times', async () => {
  const dispatchMock = jest.fn(); // Create a mock function for dispatch
  await initializeTimes(dispatchMock);


  // You can assert that the dispatchMock function was called with the expected payload
  expect(dispatchMock).toHaveBeenCalledWith({
    type: 'UPDATE_TIMES',
    payload: { availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] },
  });
});

test('updateTimes returns the same times for now with a pre-selected date', () => {
  const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const selectedDate = '2024-01-01'; // Pass any date you want for testing
  const dispatchData = { availableTimes: [], selectedDate }; // Include the selected date in the dispatch data
  const updatedTimes = updateTimes(state, dispatchData);
  expect(updatedTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

// eslint-disable-next-line no-unused-vars
const ignoreESLintUnusedVars = { render, screen, userEvent, Main };
