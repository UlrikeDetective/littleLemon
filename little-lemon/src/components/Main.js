import './Main.css';
import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

// Function to initialize the available times
function initializeTimes() {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  return fetchAPI(today); // Use fetchAPI to get available times for today
}

// Reducer function to update available times based on the selected date
function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload); // Fetch available times for the selected date
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;