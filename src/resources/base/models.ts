import { ReactNode } from 'react';
import { FetchStateModel } from '@/resources/fetch';
import { BaseApi, reducers } from '.';

export interface FetchResponse<T> {
  status: number;
  statusText: string;
  ok: boolean;
  data: T | T[];
}

export type FetchMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface FetchClientParams {
  method?: FetchMethods;
  url: string;
  data?: any;
}

export interface ids {
  [key: string]: string;
}

export interface BaseResourceModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseContextModel<T = any> {
  getAll: () => Promise<T[]>;
  find: (id: string) => Promise<T>;
  create: (item: Partial<T>) => Promise<T>;
  update: (item: Partial<T>) => Promise<T>;
  remove: (id: string) => void;
}

export interface BaseStateModel<RM = BaseResourceModel> extends FetchStateModel {
  item: RM;
  list: RM[];
}

export type BaseReducerTypes = keyof typeof reducers;

export interface BaseActionModel<T = BaseReducerTypes, P = any> {
  type: T;
  payload: P;
}

export type BaseReducerFunc<BSM = BaseStateModel, BAM = BaseActionModel> = (state: BSM, action: BAM) => BSM;

export interface BaseProviderProps<RM = BaseResourceModel, C = BaseContextModel> {
  api: BaseApi<RM>;
  children?: ReactNode;
  Context: any;
  [key: string]: any;
}
