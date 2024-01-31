import { BaseContext, defaultContext, BaseProviderProps } from '.';

export const BaseProvider = <T extends unknown>({
  Context = BaseContext,
  api,
  children,
  ...args
}: BaseProviderProps) => {
  const getAll = async (id: string): Promise<T[]> => {
    const response = await api.getAll();
    return response.data as T[];
  };

  const find = async (id: string): Promise<T> => {
    const response = await api.find(id);
    return response.data as T;
  };

  const create = async (item: Partial<T>): Promise<T> => {
    const response = await api.create(item);
    return response.data as T;
  };

  const update = async (item: Partial<T>): Promise<T> => {
    const response = await api.update(item);
    return response.data as T;
  };

  const remove = async (id: string): Promise<T> => {
    const response = await api.delete(id);
    return response.data as T;
  };

  const contextValue = {
    ...defaultContext,
    find,
    create,
    update,
    remove,
    getAll,
    ...args,
  };

  console.log('contextValue', contextValue);
  console.log('Context', Context);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
