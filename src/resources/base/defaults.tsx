import { defaults as fetchDefaults } from '@/resources/fetch';
import { BaseContextModel, BaseStateModel, BaseResourceModel } from '.';

export const resource: BaseResourceModel = {
  id: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const state: BaseStateModel = {
  ...fetchDefaults.state,
  item: { ...resource },
  list: [],
};

export const context: BaseContextModel = {
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
