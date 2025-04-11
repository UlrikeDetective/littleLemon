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
    <section className="booking-section" aria-label="Reservation Form">
      <h2>Book a Table</h2>
      <form 
        className="booking-form" 
        onSubmit={handleSubmit} 
        noValidate
        aria-describedby="form-description"
      >
        <p id="form-description" className="sr-only">
          All fields are required. Available booking times will update based on your selected date.
        </p>

        <div className="form-field">
          <label htmlFor="res-date">
            Reservation Date
            <span aria-hidden="true">*</span>
          </label>
          <input
            type="date"
            id="res-date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={today}
            required
            aria-required="true"
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? "date-error" : undefined}
          />
          {errors.date && (
            <span id="date-error" className="error-message" role="alert">
              {errors.date}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="res-time">
            Reservation Time
            <span aria-hidden="true">*</span>
          </label>
          <select
            id="res-time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.time}
            aria-describedby={errors.time ? "time-error" : undefined}
          >
            <option value="">Select a time</option>
            {(availableTimes || []).map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
          {errors.time && (
            <span id="time-error" className="error-message" role="alert">
              {errors.time}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="guests">
            Number of Guests
            <span aria-hidden="true">*</span>
          </label>
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
            aria-invalid={!!errors.guests}
            aria-describedby={errors.guests ? "guests-error" : "guests-hint"}
          />
          <span id="guests-hint" className="hint-text">
            Please enter a number between 1 and 10
          </span>
          {errors.guests && (
            <span id="guests-error" className="error-message" role="alert">
              {errors.guests}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="occasion">
            Occasion
            <span aria-hidden="true">*</span>
          </label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.occasion}
            aria-describedby={errors.occasion ? "occasion-error" : undefined}
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {errors.occasion && (
            <span id="occasion-error" className="error-message" role="alert">
              {errors.occasion}
            </span>
          )}
        </div>

        <button 
          type="submit"
          className="submit-button"
          disabled={!isFormValid}
          aria-disabled={!isFormValid}
        >
          Make Your Reservation
        </button>
      </form>
    </section>
  );
}

export default BookingForm;
