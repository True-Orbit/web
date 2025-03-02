import { MODELS as BASE_MODELS } from '@/resources/base';
import { MODELS } from '.';

export const setUser = (state: MODELS.State, { payload }: BASE_MODELS.Action) => {
  return {
    ...state,
    user: payload,
    loading: false,
  };
};

export const setLoading = (state: MODELS.State, { payload }: BASE_MODELS.Action) => {
  return {
    ...state,
    loading: payload,
  };
};

export const setError = (state: MODELS.State, { payload }: BASE_MODELS.Action) => {
  return {
    ...state,
    error: payload,
    loading: false,
  };
};
