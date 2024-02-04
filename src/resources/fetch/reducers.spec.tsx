import { FetchStateModel, FetchStatusEnum, reducers } from '.';

describe('fetch reducer', () => {
  let state: FetchStateModel;

  beforeEach(() => {
    state = { fetch: {} }
  });

  test('startRequest', () => {
    const name = 'test';
    const action = { type: 'startRequest', payload: { name } };

    const result = reducers.startRequest(state, action);

    expect(result.fetch[name].status).toBe(FetchStatusEnum.FETCHING);
  });

  test('successRequest', () => {
    const name = 'test';
    const action = { type: 'successRequest', payload: { name } };

    const result = reducers.successRequest(state, action);

    expect(result.fetch[name].status).toBe(FetchStatusEnum.SUCCESS);
  });

  test('failRequest', () => {
    const name = 'test';
    const action = { type: 'failRequest', payload: { name } };

    const result = reducers.failRequest(state, action);

    expect(result.fetch[name].status).toBe(FetchStatusEnum.FAILED);
  });

  test('cancelRequest', () => {
    const name = 'test';
    const action = { type: 'cancelRequest', payload: { name } };

    const result = reducers.cancelRequest(state, action);

    expect(result.fetch[name].status).toBe(FetchStatusEnum.CANCELLED);
  });
});