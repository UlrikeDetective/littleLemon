/* global fetchAPI, submitAPI */

import './Main.css';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';

// Function to initialize the available times
export function initializeTimes() {
  const today = new Date().toISOString().split('T')[0];
  return fetchAPI(today) || [];
}

// Reducer function to update available times based on the selected date
export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload) || [];
    default:
      return state;
  }
}

function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/booking-confirmed');
      return true;
    }
    return false;
  };

  return (
    <main>
      <BookingPage
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default Main;
