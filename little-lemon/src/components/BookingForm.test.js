import { render, screen } from "@testing-library/react";
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

// run npm test