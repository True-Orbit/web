import { MODELS as userModels } from '@/resources/users';

export interface AuthUser {
  id: string;
  email: string;
  roles: string[];
}

export interface Credentials {
  email?: string;
  password?: string;
}

export interface State {
  authUser: AuthUser | null;
  user: userModels.User | null;
  loading: boolean;
}

export interface Context {
  state: State;
  register: (credentials: Credentials) => Promise<void>;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}
