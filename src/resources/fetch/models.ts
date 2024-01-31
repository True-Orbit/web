import { BaseActionModel, BaseReducerFunc} from '@/resources/base';

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
  };
}

export interface FetchPayloadModel extends FetchModel {
  key: string;
}
export interface FetchReducerFunc extends BaseReducerFunc<FetchStateModel, FetchActionModel> {}
export interface FetchActionModel extends BaseActionModel<string, FetchPayloadModel> {}
