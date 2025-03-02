import { MODELS } from ".";

export const state: MODELS.State = {
  user: undefined,
  loading: true,
  error: undefined,
};

export const context: MODELS.Context = {
  state,
  register: async (credentials: MODELS.Credentials) => {},
  login: async (credentials: MODELS.Credentials) => {},
  logout: async () => {},
};
