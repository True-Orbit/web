export interface AllowedProps {
  create: (item: any) => void;
  update: (item: any) => void;
}

export interface Transformations {
  outgoing: (item: any) => any;
  incoming: (item: any) => any;
}

export interface Endpoints {
  findById: (endpoint: string, id: string) => string;
  create: (endpoint: string, id: string) => string;
  update: (endpoint: string, id: string) => string;
  delete: (endpoint: string, id: string) => string;
}