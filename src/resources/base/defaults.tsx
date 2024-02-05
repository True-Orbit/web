import { defaultState as defaultFetchState } from '@/resources/fetch';
import { BaseContextModel, BaseStateModel, BaseResourceModel } from '.';

export const defaultResource: BaseResourceModel = {
  id: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const defaultState: BaseStateModel = {
  ...defaultFetchState,
  item: { ...defaultResource },
  list: [],
};

export const defaultContext: BaseContextModel = {
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
