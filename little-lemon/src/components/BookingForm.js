/* global fetchAPI, submitAPI */
import React, { useState, useEffect } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  const [errors, setErrors] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Validation functions
  const validateDate = (date) => {
    const today = new Date().toISOString().split('T')[0];
    if (!date) return 'Date is required';
    if (date < today) return 'Date cannot be in the past';
    return '';
  };

  const validateTime = (time) => {
    if (!time) return 'Time is required';
    return '';
  };

  const validateGuests = (guests) => {
    const guestsNum = Number(guests);
    if (!guests) return 'Number of guests is required';
    if (guestsNum < 1) return 'Minimum 1 guest required';
    if (guestsNum > 10) return 'Maximum 10 guests allowed';
    if (!Number.isInteger(guestsNum)) return 'Please enter a whole number';
    return '';
  };

  const validateOccasion = (occasion) => {
    if (!occasion) return 'Please select an occasion';
    return '';
  };

  // Validate all fields and update form validity
  const validateForm = (data) => {
    const newErrors = {
      date: validateDate(data.date),
      time: validateTime(data.time),
      guests: validateGuests(data.guests),
      occasion: validateOccasion(data.occasion),
    };

    setErrors(newErrors);

    // Check if all validation passed (no error messages)
    const isValid = Object.values(newErrors).every(error => error === '');
    setIsFormValid(isValid);

    return isValid;
  };

  // Validate form when any field changes
  useEffect(() => {
    validateForm(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm(formData)) {
      return;
    }

    const success = submitForm(formData);
    if (!success) {
      alert('Failed to submit reservation. Please try again.');
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        min={today}
        required
        aria-required="true"
        aria-label="Reservation date"
        aria-invalid={!!errors.date}
      />
      {errors.date && <span className="error-message">{errors.date}</span>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
        aria-required="true"
        aria-label="Reservation time"
        aria-invalid={!!errors.time}
      >
        <option value="">Select a time</option>
        {(availableTimes || []).map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>
      {errors.time && <span className="error-message">{errors.time}</span>}

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
        aria-required="true"
        aria-label="Number of guests"
        aria-invalid={!!errors.guests}
        title="Please enter a number between 1 and 10"
      />
      {errors.guests && <span className="error-message">{errors.guests}</span>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
        aria-required="true"
        aria-label="Occasion"
        aria-invalid={!!errors.occasion}
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
      {errors.occasion && <span className="error-message">{errors.occasion}</span>}

      <input 
        type="submit" 
        value="Make Your Reservation"
        aria-label="Submit reservation"
        disabled={!isFormValid}
      />
    </form>
  );
}

export default BookingForm;
