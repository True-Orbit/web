import { MODELS } from '.';

export const state: MODELS.State = {
  user: null,
  loading: true,
};

export const context: MODELS.Context = {
  state,
  register: async (_credentials: MODELS.Credentials) => {},
  login: async (_credentials: MODELS.Credentials) => {},
  logout: async () => {},
  isAuthenticated: false,
};
