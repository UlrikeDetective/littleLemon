import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, setAvailableTimes }) {
  return (
    <section className="booking-page">
      <h1>Reserve a Table</h1>
      <p>Fill out the form below to reserve your table at Little Lemon.</p>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </section>
  );
}

export default BookingPage;