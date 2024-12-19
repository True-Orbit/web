import { useReducer, useMemo, Context } from 'react';
import { createReducer } from '@/lib/utils';
import {
  MODELS,
  defaults,
  BaseApi,
  baseSearchReducer,
  useBasicSearch,
  removeUndefined,
  defaultCreateQuery,
  defaultIsEnabled,
  defaultHasFilters,
} from '.';

export interface SearchProviderProps<R extends MODELS.Resource> {
  api: BaseApi<R>;
  children: React.ReactNode;
  searchType: string;
  context: Context<MODELS.SearchContext<R>>;
  reducers?: Record<string, unknown>;
  createQuery?: (search: MODELS.SearchState) => Record<string, unknown>;
  isEnabled?: (state: MODELS.SearchState) => boolean;
  hasFitlers?: (state: MODELS.SearchState) => boolean;
}

export const SearchProvider = <R extends MODELS.Resource>({
  children,
  api,
  context: SearchContext,
  searchType,
  reducers: reducersParam = {},
  createQuery = defaultCreateQuery,
  isEnabled = defaultIsEnabled,
  hasFitlers = defaultHasFilters,
}: SearchProviderProps<R>) => {
  const reducers = useMemo(() => createReducer({ ...baseSearchReducer, ...reducersParam }), [reducersParam]);
  const [state, dispatch] = useReducer(reducers, { ...defaults.searchState });
  const cleanOptions = removeUndefined(state.searchOptions);

  if (Object.entries(cleanOptions).length !== Object.entries(state.searchOptions).length) {
    dispatch({ type: 'replaceOptions', payload: cleanOptions });
  }

  const currentSearch = createQuery(state);

  const { data, isFetching } = useBasicSearch({
    searchType,
    api,
    searchOptions: currentSearch,
    enabled: isEnabled(state),
  });

  const { data: result, pagination } = data!;

  const value = {
    result: result as R[],
    pagination: { ...defaults.pagination, ...pagination },
    isFetching,
    state,
    dispatch,
    currentSearch,
    hasFilters: hasFitlers(state),
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};
