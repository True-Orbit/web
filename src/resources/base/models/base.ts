import { MODELS as FETCH_MODELS } from '@/resources/fetch';
import { Api, reducers } from '..';

export interface Resource {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface State<RM = Resource> extends FETCH_MODELS.State {
  item: RM;
  list: RM[];
}

export type ReducerTypes = keyof typeof reducers;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Action<T = ReducerTypes, P = any> {
  type: T;
  payload: P;
}

export type ReducerFunc<BSM = State, BAM = Action> = (state: BSM, action: BAM) => BSM;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Context<T = any> {
  getAll: () => Promise<T[]>;
  find: (id: string) => Promise<T>;
  create: (item: Partial<T>) => Promise<T>;
  update: (item: Partial<T>) => Promise<T>;
  remove: (id: string) => void;
}

export interface ProviderProps<RM> {
  api: Api<RM>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Context: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
