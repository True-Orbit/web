import { MODELS as AUTH_MODELS } from '@/resources/auth';
import { MODELS as BASE_MODELS } from '@/resources/base';
import { searchReducer } from '.';

export interface Core {
  email: string;
  firstName: string;
  lastName: string;
  profileUrl: string;
  avatarUrl: string;
  handle: string;
  role: string;
}

export interface User extends BASE_MODELS.Resource, AUTH_MODELS.AuthUser, Core {}

export interface SearchContext extends BASE_MODELS.SearchContext<User> {
  state: SearchState;
  dispatch: (action: SearchAction) => void;
}

export type ReducersTypes = keyof typeof searchReducer;

export interface SearchState extends BASE_MODELS.SearchState<User> {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SearchAction<P = any> extends BASE_MODELS.Action<ReducersTypes, P> {}
export type SearchReducerFunc = BASE_MODELS.ReducerFunc<SearchState, SearchAction>;

export interface ProviderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
