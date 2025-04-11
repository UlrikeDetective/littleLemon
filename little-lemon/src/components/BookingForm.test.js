import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});

describe('BookingForm HTML5 Validation', () => {
  const mockProps = {
    availableTimes: ['17:00', '18:00', '19:00'],
    dispatch: jest.fn(),
    submitForm: jest.fn(),
  };

  beforeEach(() => {
    render(<BookingForm {...mockProps} />);
  });

  test('date input has required validation attributes', () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('min', new Date().toISOString().split('T')[0]);
    expect(dateInput).toHaveAttribute('aria-required', 'true');
  });

  test('time select has required validation attributes', () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute('required');
    expect(timeSelect).toHaveAttribute('aria-required', 'true');
  });

  test('guests input has required validation attributes', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('aria-required', 'true');
  });

  test('occasion select has required validation attributes', () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute('required');
    expect(occasionSelect).toHaveAttribute('aria-required', 'true');
  });

  test('submit button should be disabled when form is invalid', () => {
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    // Initially, the form should be invalid as fields are empty
    expect(submitButton).toBeDisabled();
  });
});

describe('BookingForm JavaScript Validation', () => {
  const mockProps = {
    availableTimes: ['17:00', '18:00', '19:00'],
    dispatch: jest.fn(),
    submitForm: jest.fn(),
  };

  beforeEach(() => {
    render(<BookingForm {...mockProps} />);
  });

  describe('Date validation', () => {
    const dateInput = () => screen.getByLabelText(/choose date/i);
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    test('accepts valid future date', () => {
      fireEvent.change(dateInput(), { target: { value: tomorrow } });
      expect(screen.queryByText('Date cannot be in the past')).not.toBeInTheDocument();
    });

    test('rejects past date', () => {
      fireEvent.change(dateInput(), { target: { value: yesterday } });
      expect(screen.getByText('Date cannot be in the past')).toBeInTheDocument();
    });

    test('rejects empty date', () => {
      fireEvent.change(dateInput(), { target: { value: '' } });
      expect(screen.getByText('Date is required')).toBeInTheDocument();
    });
  });

  describe('Time validation', () => {
    const timeSelect = () => screen.getByLabelText(/choose time/i);

    test('accepts valid time selection', () => {
      fireEvent.change(timeSelect(), { target: { value: '17:00' } });
      expect(screen.queryByText('Time is required')).not.toBeInTheDocument();
    });

    test('rejects empty time selection', () => {
      fireEvent.change(timeSelect(), { target: { value: '' } });
      expect(screen.getByText('Time is required')).toBeInTheDocument();
    });
  });

  describe('Guests validation', () => {
    const guestsInput = () => screen.getByLabelText(/number of guests/i);

    test('accepts valid number of guests', () => {
      fireEvent.change(guestsInput(), { target: { value: '4' } });
      expect(screen.queryByText('Number of guests is required')).not.toBeInTheDocument();
    });

    test('rejects zero guests', () => {
      fireEvent.change(guestsInput(), { target: { value: '0' } });
      expect(screen.getByText('Minimum 1 guest required')).toBeInTheDocument();
    });

    test('rejects more than 10 guests', () => {
      fireEvent.change(guestsInput(), { target: { value: '11' } });
      expect(screen.getByText('Maximum 10 guests allowed')).toBeInTheDocument();
    });

    test('rejects decimal numbers', () => {
      fireEvent.change(guestsInput(), { target: { value: '2.5' } });
      expect(screen.getByText('Please enter a whole number')).toBeInTheDocument();
    });
  });

  describe('Occasion validation', () => {
    const occasionSelect = () => screen.getByLabelText(/occasion/i);

    test('accepts valid occasion selection', () => {
      fireEvent.change(occasionSelect(), { target: { value: 'Birthday' } });
      expect(screen.queryByText('Please select an occasion')).not.toBeInTheDocument();
    });

    test('rejects empty occasion selection', () => {
      fireEvent.change(occasionSelect(), { target: { value: '' } });
      expect(screen.getByText('Please select an occasion')).toBeInTheDocument();
    });
  });

  describe('Form submission', () => {
    test('enables submit button when all fields are valid', () => {
      const dateInput = screen.getByLabelText(/choose date/i);
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const occasionSelect = screen.getByLabelText(/occasion/i);
      const submitButton = screen.getByRole('button', { name: /make your reservation/i });

      // Fill in all fields with valid data
      fireEvent.change(dateInput, { 
        target: { 
          value: new Date(Date.now() + 86400000).toISOString().split('T')[0] 
        } 
      });
      fireEvent.change(timeSelect, { target: { value: '17:00' } });
      fireEvent.change(guestsInput, { target: { value: '4' } });
      fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

      expect(submitButton).not.toBeDisabled();
    });
  });
});

// run npm test