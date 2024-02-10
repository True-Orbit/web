import { MODELS as BASE_MODELS } from '@/resources/base';

export enum StatusEnum {
  FETCHING = 'FETCHING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
}

export type StatusTypes = keyof typeof StatusEnum;

type Error = string | null;
type Name = string;

export interface Fetch {
  status?: StatusTypes;
  error?: Error;
}

export interface State {
  fetch: {
    [key: Name]: Fetch;
  };
}

export interface Payload {
  name: Name;
  error?: Error;
}

export interface ReducerFunc extends BASE_MODELS.ReducerFunc<State, Action> {}
export interface Action extends BASE_MODELS.Action<string, Payload> {}
