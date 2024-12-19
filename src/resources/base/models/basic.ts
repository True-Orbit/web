export interface ids {
  [key: string]: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Action<T = any, P = any> {
  type: T;
  payload: P;
}

export interface Resource {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
