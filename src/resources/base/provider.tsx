import { BaseContext, defaults, MODELS } from '.';

export const BaseProvider = <RM extends MODELS.Resource>({
  Context = BaseContext,
  api,
  children,
  state,
  dispatch,
  ...args
}: MODELS.ProviderProps<RM>) => { 
  
  const getAll = async (): Promise<void> => {
    if (state.fetch.getAll) return;

    dispatch({ type: 'startRequest', payload: { name: 'getAll' } });
    try {
      const response = await api.getAll();
      dispatch({ type: 'setList', payload: response.data as RM[] });
      dispatch({ type: 'successRequest', payload: { name: 'getAll' } });
    } catch (error) {
      dispatch({ type: 'failRequest', payload: { name: 'getAll', error } });
    }
  };

  const find = async (id: string): Promise<void> => {
    dispatch({ type: 'startRequest', payload: { name: 'find' } });
    try {
      const response = await api.find(id);
      dispatch({ type: 'setItem', payload: response.data as RM[] });
      dispatch({ type: 'successRequest', payload: { name: 'find' } });
    } catch (error) {
      dispatch({ type: 'failRequest', payload: { name: 'find', error } });
    }
  };

  const create = async (item: Partial<RM>): Promise<void> => {
    dispatch({ type: 'startRequest', payload: { name: 'create' } });
    try {
      const response = await api.create(item);
      dispatch({ type: 'setItem', payload: response.data as RM });
      dispatch({ type: 'successRequest', payload: { name: 'create' } });
    } catch (error) {
      dispatch({ type: 'failRequest', payload: { name: 'create', error } });
    }
  };

  const update = async (item: Partial<RM>): Promise<void> => {
    dispatch({ type: 'startRequest', payload: { name: 'update' } });
    try {
      const response = await api.update(item);
      dispatch({ type: 'setItem', payload: response.data as RM });
      dispatch({ type: 'successRequest', payload: { name: 'update' } });
    } catch (error) {
      dispatch({ type: 'failRequest', payload: { name: 'update', error } });
    }
  };

  const remove = async (id: string): Promise<void> => {
    dispatch({ type: 'startRequest', payload: { name: 'remove' } });
    try {
      await api.delete(id);
      dispatch({ type: 'successRequest', payload: { name: 'remove' } });
    } catch (error) {
      dispatch({ type: 'failRequest', payload: { name: 'remove', error } });
    }
  };

  const contextValue = {
    ...defaults.context,
    find,
    create,
    update,
    remove,
    getAll,
    state,
    dispatch,
    ...args,
  };

  return (<Context.Provider value={contextValue}>{children}</Context.Provider>);
};
