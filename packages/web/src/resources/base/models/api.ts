export interface AllowedProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  create: (item: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update: (item: any) => void;
}

export interface Transformations {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  outgoing: (item: any) => any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  incoming: (item: any) => any;
}

export interface Endpoints {
  findById: (endpoint: string, id: string) => string;
  create: (endpoint: string, id: string) => string;
  update: (endpoint: string, id: string) => string;
  delete: (endpoint: string, id: string) => string;
}
