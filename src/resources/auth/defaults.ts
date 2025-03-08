import { defaults } from "@/resources/users";
import { MODELS } from '.';

export const state: MODELS.State = {
  user: defaults.user,
  loading: true,
};

export const context: MODELS.Context = {
  state,
  register: async (_credentials: MODELS.Credentials) => {},
  login: async (_credentials: MODELS.Credentials) => {},
  logout: async () => {},
  auth: async () => ({}),
  isAuthenticated: false,
};
