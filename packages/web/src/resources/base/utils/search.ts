import { MODELS } from '..';

export interface CreateQueryProps {
  searchOptions: Record<string, unknown>;
  pagination: MODELS.Pagination;
  searchStr: string;
}

export const defaultCreateQuery = ({ searchOptions, pagination, searchStr }: CreateQueryProps) => ({
  ...searchOptions,
  ...pagination,
  searchStr,
});

export const defaultIsEnabled = (state: MODELS.SearchState): boolean =>
  state.forceSearch ||
  state.searchStr.length > 2 ||
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Object.values(state.searchOptions).some((opt: any) => opt?.toString().length > 2) ||
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (state.searchStr.length < 1 && Object.values(state.searchOptions).every((opt: any) => opt?.toString().length < 1));

export const defaultHasFilters = (state: MODELS.SearchState): boolean => Object.keys(state.searchOptions).length > 0;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removeUndefined = (obj: Record<string, any>) =>
  Object.fromEntries(Object.entries(obj).filter(([_, v]) => !(Object.is(v, undefined) || Object.is(v, null))));
