import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from './Main';

// Mock the fetchAPI function
global.fetchAPI = jest.fn((date) => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
});

describe('Main Component Tests', () => {
  test('initializeTimes returns expected times array', () => {
    // Arrange
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    
    // Act
    const times = initializeTimes();
    
    // Assert
    expect(times).toEqual(expectedTimes);
    expect(fetchAPI).toHaveBeenCalled();
  });

  test('updateTimes returns updated times when date changes', () => {
    // Arrange
    const state = ['17:00', '18:00'];
    const action = { type: 'UPDATE_TIMES', payload: '2024-12-25' };
    
    // Act
    const newTimes = updateTimes(state, action);
    
    // Assert
    expect(newTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    expect(fetchAPI).toHaveBeenCalledWith('2024-12-25');
  });
});