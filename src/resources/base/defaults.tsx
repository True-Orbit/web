import { BaseContextModel } from '.';

export const defaultState = {};

export const defaultContext: BaseContextModel = {
  state: { ...defaultState },
  dispatch: () => {},
  find: async (id: string) => ({}),
  create: async (item: any) => ({}),
  update: async (item: any) => ({}),
  remove: async (id: string) => {},
};