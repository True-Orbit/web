import { FetchReducerFunc, FetchStateModel, FetchActionModel, FetchStatusEnum } from '.';

export const startRequest: FetchReducerFunc = (state: FetchStateModel, action: FetchActionModel): FetchStateModel => {
  const { name } = action.payload;

  return {
    ...state,
    fetch: {
      ...state.fetch,
      [name]: { status: FetchStatusEnum.FETCHING },
    },
  };
};

export const successRequest: FetchReducerFunc = (state: FetchStateModel, action: FetchActionModel): FetchStateModel => {
  const { name, error } = action.payload;

  return {
    ...state,
    fetch: {
      ...state.fetch,
      [name]: { status: FetchStatusEnum.SUCCESS, error },
    },
  };
};

export const failRequest: FetchReducerFunc = (state: FetchStateModel, action: FetchActionModel): FetchStateModel => {
  const { name, error } = action.payload;

  return {
    ...state,
    fetch: {
      ...state.fetch,
      [name]: { status: FetchStatusEnum.FAILED, error },
    },
  };
};

export const cancelRequest: FetchReducerFunc = (state: FetchStateModel, action: FetchActionModel): FetchStateModel => {
  const { name, error } = action.payload;

  return {
    ...state,
    fetch: {
      ...state.fetch,
      [name]: { status: FetchStatusEnum.CANCELLED, error },
    },
  };
};
