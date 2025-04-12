import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page">
      <div className="booking-header">
        <h1>Reserve a Table</h1>
        <p>Fill out the form below to reserve your table at Little Lemon.</p>
      </div>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;