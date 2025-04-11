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
    <section 
      className="booking-section" 
      aria-labelledby="booking-title"
    >
      <h1 id="booking-title">Reserve a Table</h1>
      
      <form 
        className="booking-form"
        onSubmit={handleSubmit}
        aria-describedby="form-description"
        noValidate
      >
        <div id="form-description" className="sr-only">
          Fill out the form below to reserve your table at Little Lemon. All fields marked with an asterisk (*) are required.
        </div>

        <div className="form-field">
          <label htmlFor="res-date" id="date-label">
            Reservation Date
            <span aria-label="required" className="required">*</span>
          </label>
          <input
            type="date"
            id="res-date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            aria-required="true"
            aria-labelledby="date-label"
            aria-invalid={!!errors.date}
            aria-describedby={`date-instructions ${errors.date ? "date-error" : ""}`}
          />
          <span id="date-instructions" className="sr-only">
            Select a date for your reservation
          </span>
          {errors.date && (
            <div id="date-error" className="error-message" role="alert">
              {errors.date}
            </div>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="res-time" id="time-label">
            Reservation Time
            <span aria-label="required" className="required">*</span>
          </label>
          <select
            id="res-time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            aria-required="true"
            aria-labelledby="time-label"
            aria-invalid={!!errors.time}
            aria-describedby={`time-instructions ${errors.time ? "time-error" : ""}`}
          >
            <option value="">Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          <span id="time-instructions" className="sr-only">
            Select a time for your reservation
          </span>
          {errors.time && (
            <div id="time-error" className="error-message" role="alert">
              {errors.time}
            </div>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="guests" id="guests-label">
            Number of Guests
            <span aria-label="required" className="required">*</span>
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
            aria-labelledby="guests-label"
            aria-invalid={!!errors.guests}
            aria-describedby="guests-hint guests-error"
          />
          <span id="guests-hint" className="hint-text">
            Enter a number between 1 and 10
          </span>
          {errors.guests && (
            <div id="guests-error" className="error-message" role="alert">
              {errors.guests}
            </div>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="occasion" id="occasion-label">
            Occasion
            <span aria-label="required" className="required">*</span>
          </label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            required
            aria-required="true"
            aria-labelledby="occasion-label"
            aria-invalid={!!errors.occasion}
            aria-describedby={`occasion-instructions ${errors.occasion ? "occasion-error" : ""}`}
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
          <span id="occasion-instructions" className="sr-only">
            Select an occasion for your reservation
          </span>
          {errors.occasion && (
            <div id="occasion-error" className="error-message" role="alert">
              {errors.occasion}
            </div>
          )}
        </div>

        <button 
          type="submit"
          className="submit-button"
          disabled={!isFormValid}
          aria-disabled={!isFormValid}
          aria-label="Submit reservation request"
        >
          Make Your Reservation
        </button>

        <div 
          className="form-status" 
          role="status" 
          aria-live="polite"
        >
          {isFormValid ? "Form is ready to submit" : "Please fill in all required fields"}
        </div>
      </form>
    </section>
  );
}

export default BookingForm;
