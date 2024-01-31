import { FetchStateModel } from '@/resources/fetch';

export interface FetchResponse<T> { 
  status: string, 
  statusText: string,
  ok: boolean, 
  data: T; 
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
  find: (id: string) => Promise<T>;
  create: (item: Partial<T>) => Promise<T>;
  update: (item: Partial<T>) => Promise<T>;
  remove: (id: string) => void;
}

export interface BaseStateModel extends FetchStateModel {}

export interface BaseActionModel<AT = string, P = any> {
  type: AT;
  payload: P;
}

export type BaseReducerFunc<BSM = BaseStateModel, BAM = BaseActionModel> = (state: BSM, action: BAM) => BSM;