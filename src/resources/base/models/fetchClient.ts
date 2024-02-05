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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}
