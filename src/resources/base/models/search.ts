import { Action } from '.';

export interface Pagination {
  total: number;
  page: number;
  pageSize: number;
}

export interface SearchState<OptionsType = Record<string, unknown>> {
  searchOptions: Partial<OptionsType>;
  pagination: Pagination;
  searchStr: string;
  forceSearch: boolean;
  showFilters: boolean;
}

export interface SearchContext<R = unknown> {
  state: SearchState;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: React.Dispatch<Action<any, any>>;
  result: R[];
  isFetching: boolean;
  hasFilters: boolean;
  pagination: Pagination;
  currentSearch: Record<string, unknown>;
}

export interface SearchResults {
  data: unknown[];
  pagination: Pagination;
}
