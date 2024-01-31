import { ReactNode } from 'react';
import { BaseContext, defaultContext, BaseApi, BaseContextModel, BaseResourceModel } from '.';

export interface BaseProviderProps<RM = BaseResourceModel, C = BaseContextModel> {
  api: BaseApi<RM>;
  children: ReactNode;
  Context: any;
}

export const BaseProvider = <T, >({ Context = BaseContext, api, children, ...args }: BaseProviderProps) => {
  const find = async (id: string): Promise<T> => {
    const response = await api.find(id);
    return response.data as T;
  }

  const create = async (item: Partial<T>): Promise<T> => {
    const response = await api.create(item);
    return response.data as T;
  }

  const update = async (item: Partial<T>): Promise<T> => {
    const response = await api.update(item);
    return response.data as T;
  }

  const remove = async (id: string): Promise<T> => {
    const response = await api.delete(id);
    return response.data as T;
  }

  const contextValue = {
    ...defaultContext,
    find,
    create,
    update,
    remove,
    ...args,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}