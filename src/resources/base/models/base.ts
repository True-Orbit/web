import { FetchStateModel } from '@/resources/fetch';
import { BaseApi, reducers } from '..';

export interface BaseResourceModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseStateModel<RM = BaseResourceModel> extends FetchStateModel {
  item: RM;
  list: RM[];
}

export type BaseReducerTypes = keyof typeof reducers;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface BaseActionModel<T = BaseReducerTypes, P = any> {
  type: T;
  payload: P;
}

export type BaseReducerFunc<BSM = BaseStateModel, BAM = BaseActionModel> = (state: BSM, action: BAM) => BSM;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface BaseContextModel<T = any> {
  getAll: () => Promise<T[]>;
  find: (id: string) => Promise<T>;
  create: (item: Partial<T>) => Promise<T>;
  update: (item: Partial<T>) => Promise<T>;
  remove: (id: string) => void;
}

export interface BaseProviderProps<RM> {
  api: BaseApi<RM>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Context: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
