import { BaseActionModel, BaseReducerFunc } from '@/resources/base';

export enum FetchStatusEnum {
  FETCHING = 'FETCHING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
}

export type FetchStatusTypes = keyof typeof FetchStatusEnum;

type Error = string | null;
type Name = string;

export interface FetchModel {
  status?: FetchStatusTypes;
  error?: Error;
}

export interface FetchStateModel {
  fetch: {
    [key: Name]: FetchModel;
  };
}

export interface FetchPayloadModel {
  name: Name;
  error?: Error;
}

export interface FetchReducerFunc extends BaseReducerFunc<FetchStateModel, FetchActionModel> {}
export interface FetchActionModel extends BaseActionModel<string, FetchPayloadModel> {}
