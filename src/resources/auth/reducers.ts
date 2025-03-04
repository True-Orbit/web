import { MODELS as BASE_MODELS } from '@/resources/base';
import { MODELS } from '.';

export const setAuthUser = (state: MODELS.State, { payload }: BASE_MODELS.Action) => ({
  ...state,
  authUser: payload,
});

export const setUser = (state: MODELS.State, { payload }: BASE_MODELS.Action) => ({
  ...state,
  user: { ...state.authUser, ...payload },
  loading: false,
});

export const setLoading = (state: MODELS.State, { payload }: BASE_MODELS.Action) => {
  return {
    ...state,
    loading: payload,
  };
};
