import { useReducer, useEffect, useState, useMemo } from 'react';
import { createReducer, MODELS, defaults, BaseApi, baseSearchReducer, SearchContext, useBasicSearch, removeUndefined, defaultCreateQuery, defaultIsEnabled, defaultHasFilters } from '.';

export interface SearchProviderProps<R extends MODELS.Resource> {
  api: BaseApi<R>;
  children: React.ReactNode;
  searchType: string;
  context: MODELS.SearchContext<R>;
  reducers?: Record<string, any>;
  createQuery: (search: MODELS.SearchState) => Record<string, unknown>;
  isEnabled: (state: MODELS.SearchState) => boolean;
  hasFitlers: (state: MODELS.SearchState) => boolean;
}

export const SearchProvider = <R extends MODELS.Resource>({ 
  children, 
  api, 
  context,
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

  const { data: result, pagination } = data;

  const value = {
    result,
    pagination: { ...defaults.pagination, ...pagination },
    isFetching,
    state,
    dispatch,
    currentSearch,
    hasFilters: hasFitlers(state),
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}