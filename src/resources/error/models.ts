export interface Error {
  message: string;
  stack?: string;
  code?: string;
  name?: string;
  statusCode?: number;
  statusText?: string;
  details?: Record<string, any>;
}