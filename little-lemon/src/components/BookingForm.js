import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, setAvailableTimes }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);

    // Example: Remove the selected time from availableTimes
    setAvailableTimes((prevTimes) =>
      prevTimes.filter((time) => time !== formData.time)
    );

    alert('Reservation submitted successfully!');
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        max="10"
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Casual Meal">Casual Meal/Get-Together</option>
        <option value="Date Night">Date Night</option>
        <option value="Family Dinner">Family Dinner</option>
        <option value="Meeting">Meeting/Business Lunch/Dinner</option>
        <option value="Celebration">Celebrating a Graduation/Promotion/New Job</option>
        <option value="Thank You">Thank You/Appreciation</option>
        <option value="Treat Yourself">Treating Yourself</option>
        <option value="Trying New Cuisine">Trying a New Cuisine</option>
        <option value="Support Local">Supporting a Local Business</option>
        <option value="Just Because">Just Because!</option>
        <option value="Engagement">Engagement Celebration</option>
        <option value="Reunion">Reunion (Family/Friends/School)</option>
        <option value="Pre-Event Dinner">Pre-Theater/Concert Dinner</option>
        <option value="Post-Event Meal">Post-Theater/Concert Meal</option>
        <option value="Project Success">Successful Project Completion</option>
        <option value="Something new">Something new</option>
        <option value="Other">Other</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
}

export default BookingForm;