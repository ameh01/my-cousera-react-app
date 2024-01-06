import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReservationsForm from './ReservationsForm';

test('ReservationsForm renders with correct attributes', () => {
  // Test data with Date objects
  const availableTimes = [
    new Date('2024-01-01T17:00:00'),
    new Date('2024-01-01T18:00:00'),
    new Date('2024-01-01T19:00:00'),
    new Date('2024-01-01T20:00:00'),
    new Date('2024-01-01T21:00:00'),
    new Date('2024-01-01T22:00:00'),
  ];

  const dispatchMock = jest.fn();

  render(<ReservationsForm availableTimes={availableTimes} dispatch={dispatchMock} />);

  // Test date input
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('id', 'res-date');
  expect(dateInput).toHaveAttribute('required');

  // Test time select
  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect).toHaveAttribute('id', 'res-time');
  expect(timeSelect).toHaveAttribute('required');

  // Test guests input
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('id', 'guests');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(guestsInput).toHaveAttribute('required');

  // Test occasion select
  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toHaveAttribute('id', 'occasion');
  expect(occasionSelect).toHaveAttribute('required');

  // Test submit button
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  expect(submitButton).toHaveAttribute('type', 'submit');
  expect(submitButton).toHaveAttribute('disabled'); // Initially, the button should be disabled


  // Test form submission with valid inputs
  fireEvent.change(dateInput, { target: { value: '2024-01-01' } });
  fireEvent.change(timeSelect, { target: { value: '17:00' } });
  fireEvent.change(guestsInput, { target: { value: '5' } });
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

  // Expect the 'disabled' attribute not to be present after valid inputs
  expect(submitButton).not.toHaveAttribute('disabled', { exact: false });
});
