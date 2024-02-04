import { FetchStateModel, FetchStatusEnum, reducers } from '.';

describe('fetch reducer', () => {
  let state: FetchStateModel;

  beforeEach(() => {
    state = { fetch: {} }
  });

  test('startRequest', () => {
    const name = 'test';
    const action = { type: 'startRequest', payload: { name } };

    const newState = reducers.startRequest(state, action);

    expect(newState.fetch[name].status).toBe(FetchStatusEnum.FETCHING);
  });

  test('successRequest', () => {
    const name = 'test';
    const action = { type: 'successRequest', payload: { name } };

    const newState = reducers.successRequest(state, action);

    expect(newState.fetch[name].status).toBe(FetchStatusEnum.SUCCESS);
  });

  test('failRequest', () => {
    const name = 'test';
    const action = { type: 'failRequest', payload: { name } };

    const newState = reducers.failRequest(state, action);

    expect(newState.fetch[name].status).toBe(FetchStatusEnum.FAILED);
  });

  test('cancelRequest', () => {
    const name = 'test';
    const action = { type: 'cancelRequest', payload: { name } };

    const newState = reducers.cancelRequest(state, action);

    expect(newState.fetch[name].status).toBe(FetchStatusEnum.CANCELLED);
  });
});