import { FetchReducerFunc, FetchStateModel, FetchActionModel } from '.';

export const startRequest: FetchReducerFunc = (state: FetchStateModel, action: FetchActionModel): FetchStateModel => {
  const { status, error } = action.payload;

  return {
    ...state,
    fetch: {
      ...state.fetch,
      [action.payload.key]: { status, error },
    }
  }
};