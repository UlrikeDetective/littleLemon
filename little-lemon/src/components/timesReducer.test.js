import { initializeTimes, updateTimes } from "./Main";

describe("initializeTimes", () => {
  test("Returns the correct initial times", () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
});

describe("updateTimes", () => {
  test("Returns the same state when no logic is implemented", () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: "UPDATE_TIMES", payload: "2025-04-10" }; // Example date
    const updatedState = updateTimes(initialState, action);
    expect(updatedState).toEqual(initialState);
  });

  test("Returns the initial state for unknown action types", () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: "UNKNOWN_ACTION" };
    const updatedState = updateTimes(initialState, action);
    expect(updatedState).toEqual(initialState);
  });
});

// run: npm test