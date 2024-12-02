import { BaseApi } from '..';
import { Action, Resource } from '.';

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

export interface SearchContext<R = any> {
  state: SearchState;
  dispatch: React.Dispatch<Action>;
  result: R[];
  isFetching: boolean;
  hasFilters: boolean;
  pagination: Pagination;
  currentSearch: Record<string, unknown>;
}