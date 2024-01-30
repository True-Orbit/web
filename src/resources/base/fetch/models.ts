import { ActionModel } from '@/resources/base';
import { Reducer } from "react";

export enum FetchStatusTypes {
  FETCHING = 'FETCHING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  CANCELLED = 'CANCELLED',
}

export interface FetchModel {
  status: typeof FetchStatusTypes;
  error: string | null;
}

export interface FetchStateModel {
  fetch: {
    [key: string]: FetchModel;
  }
}

export interface FetchPayloadModel extends FetchModel {
  key: string;
}
export interface FetchReducerFunc extends Reducer<FetchStateModel, ActionModel> {}
export interface FetchActionModel extends ActionModel<string, FetchPayloadModel> {}