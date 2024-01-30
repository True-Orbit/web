import { Reducer } from 'react';

export type FetchMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface FetchClientParams {
  method?: FetchMethods;
  url: string;
  data?: any;
} 

export interface ids {
  [key: string]: string;
}

export interface BaseDBModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseContextModel<T = any> {
  state: BaseStateModel;
  dispatch: (action: ActionModel) => void;
  find: (id: string) => Promise<T>;
  create: (item: Partial<T>) => Promise<T>;
  update: (item: Partial<T>) => Promise<T>;
  remove: (id: string) => void;
}

export interface BaseStateModel {
  [key: string]: any;
}

export interface ActionModel<AT = string, P = any> {
  type: AT;
  payload: P;
}

export interface BaseReducerModel extends Reducer<BaseStateModel, ActionModel> {}