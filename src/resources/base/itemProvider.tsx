import { useReducer, useMemo, Context, ReactNode } from 'react';
import { createReducer } from '@/lib/utils';
import { MODELS, defaults, baseItemReducer } from '.';

interface MiddlewareParams<R extends MODELS.Resource> {
  state: MODELS.ItemState<R>;
  item: R;
}

const defaultMiddleware = <R extends MODELS.Resource>({ item }: MiddlewareParams<R>) => item;

export interface ItemProviderProps<R extends MODELS.Resource> {
  children: ReactNode;
  context: Context<MODELS.ItemContext<R>>;
  reducers?: Record<string, unknown>;
  findById: (id: string) => { data: R };
  middleware?: ({ state, item }: MiddlewareParams<R>) => R;
}

export const ItemProvider = <R extends MODELS.Resource>({
  children,
  context: ItemContext,
  reducers: reducersParam = {},
  findById = (_id: string) => ({ data: {} as R }),
  middleware = defaultMiddleware,
}: ItemProviderProps<R>) => {
  const reducers = useMemo(() => createReducer({ ...baseItemReducer, ...reducersParam }), [reducersParam]);
  const [state, dispatch] = useReducer(reducers, { ...defaults.itemState });
  const { data: dbItem } = findById(state.currentId);
  const item = middleware({ state, item: dbItem });

  const value = {
    item,
    state,
    dispatch,
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};
