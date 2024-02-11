import { MODELS } from '.';

export const startRequest: MODELS.ReducerFunc = (state: MODELS.State, action: MODELS.Action): MODELS.State => {
  const { name } = action.payload;

  return {
    ...state,
    fetch: {
      ...state.fetch,
      [name]: { status: MODELS.Status.FETCHING },
    },
  };
};

export const successRequest: MODELS.ReducerFunc = (state: MODELS.State, action: MODELS.Action): MODELS.State => {
  const { name, error } = action.payload;

  return {
    ...state,
    fetch: {
      ...state.fetch,
      [name]: { status: MODELS.Status.SUCCESS, error },
    },
  };
};

export const failRequest: MODELS.ReducerFunc = (state: MODELS.State, action: MODELS.Action): MODELS.State => {
  const { name, error } = action.payload;

  return {
    ...state,
    fetch: {
      ...state.fetch,
      [name]: { status: MODELS.Status.FAILED, error },
    },
  };
};

export const cancelRequest: MODELS.ReducerFunc = (state: MODELS.State, action: MODELS.Action): MODELS.State => {
  const { name, error } = action.payload;

  return {
    ...state,
    fetch: {
      ...state.fetch,
      [name]: { status: MODELS.Status.CANCELLED, error },
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
