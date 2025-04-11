import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  return (
    <div className="confirmation">
      <h2>Booking Confirmed!</h2>
      <p>Thank you for your reservation at Little Lemon.</p>
      <p>We look forward to serving you!</p>
      <Link to="/" className="home-button">Return to Home</Link>
    </div>
  );
}

export default ConfirmedBooking;