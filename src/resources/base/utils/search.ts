import { MODELS } from '..';

export const defaultCreateQuery = ({
  searchOptions,
  pagination,
  searchStr,
}) => ({
  ...searchOptions,
  ...pagination,
  searchStr,
});

export const defaultIsEnabled = (state: MODELS.SearchState): boolean => 
  state.forceSearch
  || state.searchStr.length > 2
  || Object.values(state.searchOptions).some((opt: any) => opt?.toString().length > 2)
  || (state.searchStr.length < 1 && Object.values(state.searchOptions).every((opt: any) => opt?.toString().length < 1));

export const defaultHasFilters = (state: MODELS.SearchState): boolean =>
  Object.keys(state.searchOptions).length > 0

export const removeUndefined = (obj: Record<string, any>) => 
  Object.fromEntries(Object.entries(obj).filter(([_, v]) => !(Object.is(v, undefined) || Object.is(v, null))));