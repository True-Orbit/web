export interface FetchResponse<T> {
  status: number;
  statusText: string;
  ok: boolean;
  data: T | T[];
}

export type FetchMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

