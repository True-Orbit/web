export const setUser = (state, { payload }) => {
  return {
    ...state,
    user: payload,
    loading: false,
  };
}

export const setLoading = (state, { payload }) => {
  return {
    ...state,
    loading: payload,
  };
}

export const setError = (state, { payload }) => {
  return {
    ...state,
    error: payload,
    loading: false,
  };
}