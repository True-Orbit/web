import { start } from 'repl';
import { reducers, defaultState, BaseStateModel, BaseReducerTypes } from '..';
import { fa } from '@faker-js/faker';

const fakeItem = { id: '1', createdAt: new Date(), updatedAt: new Date() };

describe('fetch reducer', () => {
  let startState: BaseStateModel;
  let expectedState: BaseStateModel;

  beforeEach(() => {
    startState = { ...defaultState };
    expectedState = { ...defaultState };
  });

  test('reset', () => {
    startState.list = [fakeItem];
    startState.item = fakeItem;
    const action = { type: 'reset' as BaseReducerTypes, payload: null };

    const state = reducers.reset(startState, action);

    expect(state).toEqual(expectedState);
  });

  test('setItem', () => {
    const action = { type: 'setItem' as BaseReducerTypes, payload: fakeItem };

    const state = reducers.setItem(startState, action);

    expect(state).toEqual({ ...expectedState, item: fakeItem });
  });

  test('setList', () => {
    const name = 'test';
    const action = { type: 'setList' as BaseReducerTypes, payload: [fakeItem] };

    const state = reducers.setList(startState, action);

    expect(state).toEqual({ ...expectedState, list: [fakeItem] });
  });
});
