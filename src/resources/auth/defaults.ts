import { MODELS } from '.';

export const authUser: MODELS.AuthUser = {
  id: '1',
  email: 'example@example.com',
  roles: ['guest'],
};

export const state: MODELS.State = {
  user: authUser,
  loading: true,
  error: undefined,
};

export const context: MODELS.Context = {
  state,
  register: async (_credentials: MODELS.Credentials) => {},
  login: async (_credentials: MODELS.Credentials) => {},
  logout: async () => {},
  isAuthenticated: false,
};
