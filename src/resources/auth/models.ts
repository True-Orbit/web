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
  user?: AuthUser;
  loading: boolean;
  error?: string;
}

export interface Context {
  state: State;
  register: (credentials: Credentials) => Promise<void>;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}