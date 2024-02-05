import { createReducer } from '..';

describe('createReducer', () => {
  it('should create a reducer', () => {
    const combinedReducers = {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
      ADD: (state: any, action: any) => state + action.payload,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
      SUBTRACT: (state: any, action: any) => state - action.payload,
    };

    const reducer = createReducer(combinedReducers);
    expect(reducer(1, { type: 'ADD', payload: 2 })).toBe(3);
    expect(reducer(1, { type: 'SUBTRACT', payload: 2 })).toBe(-1);
  });
});
