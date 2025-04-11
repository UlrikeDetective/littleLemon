import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from './Main';

// Mock the fetchAPI function
global.fetchAPI = jest.fn((date) => {
  // Return consistent times regardless of the date for testing purposes
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
});

describe('Main Component Functions', () => {
  beforeEach(() => {
    // Clear mock data before each test
    jest.clearAllMocks();
  });

  test('initializeTimes returns the expected times array', () => {
    // Act
    const times = initializeTimes();
    const today = new Date().toISOString().split('T')[0];

    // Assert
    expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    expect(fetchAPI).toHaveBeenCalledWith(today);
    expect(fetchAPI).toHaveBeenCalledTimes(1);
  });

  test('updateTimes returns the correct times when receiving a date change action', () => {
    // Arrange
    const state = [];
    const testDate = '2024-12-25';
    const action = { 
      type: 'UPDATE_TIMES', 
      payload: testDate 
    };

    // Act
    const newTimes = updateTimes(state, action);

    // Assert
    expect(newTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    expect(fetchAPI).toHaveBeenCalledWith(testDate);
    expect(fetchAPI).toHaveBeenCalledTimes(1);
  });

  test('updateTimes returns the same state for unknown action types', () => {
    // Arrange
    const state = ['17:00', '18:00'];
    const action = { 
      type: 'UNKNOWN_ACTION' 
    };

    // Act
    const newTimes = updateTimes(state, action);

    // Assert
    expect(newTimes).toEqual(state);
    expect(fetchAPI).not.toHaveBeenCalled();
  });
});