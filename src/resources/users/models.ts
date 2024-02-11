import { MODELS as BASE_MODELS } from '@/resources/base';
import { reducers } from '.';

export interface Core {
  email: string;
  firstName: string;
  lastName: string;
  profileUrl: string;
  handle: string;
  avatar: string;
}

export interface User extends BASE_MODELS.Resource, Core {}

export interface Context extends BASE_MODELS.Context<User> {
  state: State;
  dispatch: (action: Action) => void;
}

export type ReducersTypes = keyof typeof reducers;

export interface State extends BASE_MODELS.State<User> {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Action<P = any> extends BASE_MODELS.Action<ReducersTypes, P> {}
export type ReducerFunc = BASE_MODELS.ReducerFunc<State, Action>;

export interface ProviderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
