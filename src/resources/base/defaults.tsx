import { defaults as fetchDefaults } from '@/resources/fetch';
import { MODELS } from '.';

export const resource: MODELS.Resource = {
  id: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const state: MODELS.State = {
  ...fetchDefaults.state,
  item: { ...resource },
  list: [],
};

export const context: MODELS.Context = {
  getAll: async () => [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  find: async (id: string) => ({}),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  create: async (item: any) => ({}),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  update: async (item: any) => ({}),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove: async (id: string) => {},
};
