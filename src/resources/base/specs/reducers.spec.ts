import { reducers, defaults, MODELS } from '..';

const fakeItem = { id: '1', createdAt: new Date(), updatedAt: new Date() };

describe('fetch reducer', () => {
  let startState: MODELS.State;
  let expectedState: MODELS.State;

  beforeEach(() => {
    startState = { ...defaults.state };
    expectedState = { ...defaults.state };
  });

  test('reset', () => {
    startState.list = [fakeItem];
    startState.item = fakeItem;
    const action = { type: 'reset' as MODELS.ReducerTypes, payload: null };

    const state = reducers.reset(startState, action);

    expect(state).toEqual(expectedState);
  });

  test('setItem', () => {
    const action = { type: 'setItem' as MODELS.ReducerTypes, payload: fakeItem };

    const state = reducers.setItem(startState, action);

    expect(state).toEqual({ ...expectedState, item: fakeItem });
  });

  test('setList', () => {
    const action = { type: 'setList' as MODELS.ReducerTypes, payload: [fakeItem] };

    const state = reducers.setList(startState, action);

    expect(state).toEqual({ ...expectedState, list: [fakeItem] });
  });
});
