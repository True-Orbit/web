import { MODELS } from '.';

export const startRequest: MODELS.ReducerFunc = (state: MODELS.State, action: MODELS.Action): MODELS.State => {
  const { name } = action.payload;

  return {
    ...state,
    fetch: {
      ...state.fetch,
      [name]: { status: MODELS.StatusEnum.FETCHING },
    },
  };
};

export const successRequest: MODELS.ReducerFunc = (state: MODELS.State, action: MODELS.Action): MODELS.State => {
  const { name, error } = action.payload;

  return {
    ...state,
    fetch: {
      ...state.fetch,
      [name]: { status: MODELS.StatusEnum.SUCCESS, error },
    },
  };
};

export const failRequest: MODELS.ReducerFunc = (state: MODELS.State, action: MODELS.Action): MODELS.State => {
  const { name, error } = action.payload;

  return {
    ...state,
    fetch: {
      ...state.fetch,
      [name]: { status: MODELS.StatusEnum.FAILED, error },
    },
  };
};

export const cancelRequest: MODELS.ReducerFunc = (state: MODELS.State, action: MODELS.Action): MODELS.State => {
  const { name, error } = action.payload;

  return {
    ...state,
    fetch: {
      ...state.fetch,
      [name]: { status: MODELS.StatusEnum.CANCELLED, error },
    },
  };
};

export const reset: MODELS.ReducerFunc = (state: MODELS.State, action: MODELS.Action): MODELS.State => {
  const { name } = action.payload;
  delete state.fetch[name];

  return {
    ...state,
    fetch: {
      ...state.fetch,
    },
  };
};

export const resetIncludes: MODELS.ReducerFunc = (state: MODELS.State, action: MODELS.Action): MODELS.State => {
  const { name } = action.payload;
  const filteredKeys = Object.keys(state.fetch).filter((key) => !key.includes(name));
  const newFetch = filteredKeys.reduce((acc, key) => ({ ...acc, [key]: state.fetch[key] }), {});

  return {
    ...state,
    fetch: {
      ...newFetch,
    },
  };
};
