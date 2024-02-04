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

  test('reset', () => {
    const name = 'test';
    state.fetch[name] = { status: FetchStatusEnum.SUCCESS };
    state.fetch['who'] = { status: FetchStatusEnum.SUCCESS };

    const action = { type: 'reset', payload: { name } };

    const newState = reducers.reset(state, action);

    expect(newState.fetch).toEqual({ who: { status: FetchStatusEnum.SUCCESS } });
  });

  test('resetIncludes', () => {
    const name = 'test';
    state.fetch[`${name}:0:20`] = { status: FetchStatusEnum.SUCCESS };
    state.fetch[`${name}:20:40`] = { status: FetchStatusEnum.SUCCESS };
    state.fetch['who'] = { status: FetchStatusEnum.SUCCESS };

    const action = { type: 'resetIncludes', payload: { name } };

    const newState = reducers.resetIncludes(state, action);

    expect(newState.fetch).toEqual({ who: { status: FetchStatusEnum.SUCCESS } });
  });
});