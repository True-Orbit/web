import { defaultState as defaultFetchState } from '@/resources/fetch';
import { BaseContextModel, BaseStateModel, BaseResourceModel } from '.';

export const defaultResource: BaseResourceModel = {
  id: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const defaultState: BaseStateModel = {
  ...defaultFetchState,
};

export const defaultContext: BaseContextModel = {
  find: async (id: string) => ({}),
  create: async (item: any) => ({}),
  update: async (item: any) => ({}),
  remove: async (id: string) => {},
};