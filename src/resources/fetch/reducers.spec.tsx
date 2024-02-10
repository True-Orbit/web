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

    expect(newState.fetch[name].status).toBe(MODELS.StatusEnum.FETCHING);
  });

  test('successRequest', () => {
    const name = 'test';
    const action = { type: 'successRequest', payload: { name } };

    const newState = reducers.successRequest(state, action);

    expect(newState.fetch[name].status).toBe(MODELS.StatusEnum.SUCCESS);
  });

  test('failRequest', () => {
    const name = 'test';
    const action = { type: 'failRequest', payload: { name } };

    const newState = reducers.failRequest(state, action);

    expect(newState.fetch[name].status).toBe(MODELS.StatusEnum.FAILED);
  });

  test('cancelRequest', () => {
    const name = 'test';
    const action = { type: 'cancelRequest', payload: { name } };

    const newState = reducers.cancelRequest(state, action);

    expect(newState.fetch[name].status).toBe(MODELS.StatusEnum.CANCELLED);
  });

  test('reset', () => {
    const name = 'test';
    state.fetch[name] = { status: MODELS.StatusEnum.SUCCESS };
    state.fetch['who'] = { status: MODELS.StatusEnum.SUCCESS };

    const action = { type: 'reset', payload: { name } };

    const newState = reducers.reset(state, action);

    expect(newState.fetch).toEqual({ who: { status: MODELS.StatusEnum.SUCCESS } });
  });

  test('resetIncludes', () => {
    const name = 'test';
    state.fetch[`${name}:0:20`] = { status: MODELS.StatusEnum.SUCCESS };
    state.fetch[`${name}:20:40`] = { status: MODELS.StatusEnum.SUCCESS };
    state.fetch['who'] = { status: MODELS.StatusEnum.SUCCESS };

    const action = { type: 'resetIncludes', payload: { name } };

    const newState = reducers.resetIncludes(state, action);

    expect(newState.fetch).toEqual({ who: { status: MODELS.StatusEnum.SUCCESS } });
  });
});
