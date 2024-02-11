import { MODELS, reducers } from '.';

describe('fetch reducer', () => {
  let state: MODELS.State;

  beforeEach(() => {
    state = { fetch: {} };
  });

  test('startRequest', () => {
    const name = 'test';
    const action = { type: 'startRequest', payload: { name } };

    const newState = reducers.startRequest(state, action);

    expect(newState.fetch[name].status).toBe(MODELS.Status.FETCHING);
  });

  test('successRequest', () => {
    const name = 'test';
    const action = { type: 'successRequest', payload: { name } };

    const newState = reducers.successRequest(state, action);

    expect(newState.fetch[name].status).toBe(MODELS.Status.SUCCESS);
  });

  test('failRequest', () => {
    const name = 'test';
    const action = { type: 'failRequest', payload: { name } };

    const newState = reducers.failRequest(state, action);

    expect(newState.fetch[name].status).toBe(MODELS.Status.FAILED);
  });

  test('cancelRequest', () => {
    const name = 'test';
    const action = { type: 'cancelRequest', payload: { name } };

    const newState = reducers.cancelRequest(state, action);

    expect(newState.fetch[name].status).toBe(MODELS.Status.CANCELLED);
  });

  test('reset', () => {
    const name = 'test';
    state.fetch[name] = { status: MODELS.Status.SUCCESS };
    state.fetch['who'] = { status: MODELS.Status.SUCCESS };

    const action = { type: 'reset', payload: { name } };

    const newState = reducers.reset(state, action);

    expect(newState.fetch).toEqual({ who: { status: MODELS.Status.SUCCESS } });
  });

  test('resetIncludes', () => {
    const name = 'test';
    state.fetch[`${name}:0:20`] = { status: MODELS.Status.SUCCESS };
    state.fetch[`${name}:20:40`] = { status: MODELS.Status.SUCCESS };
    state.fetch['who'] = { status: MODELS.Status.SUCCESS };

    const action = { type: 'resetIncludes', payload: { name } };

    const newState = reducers.resetIncludes(state, action);

    expect(newState.fetch).toEqual({ who: { status: MODELS.Status.SUCCESS } });
  });
});
