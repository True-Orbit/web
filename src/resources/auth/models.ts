import { MODELS as USER_MODELS } from '@/resources/users';

export interface AuthUser {
  id: string;
  email: string;
  role: string;
}

export interface Credentials {
  email?: string;
  password?: string;
}

export interface State {
  user: USER_MODELS.User;
  loading: boolean;
}

export interface Context {
  state: State;
  isAuthenticated: boolean;
  register: (credentials: Credentials) => Promise<void>;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => Promise<void>;
  auth: () => Promise<Partial<USER_MODELS.User>>;
}
