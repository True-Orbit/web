import { MODELS } from '.';

export const resource: MODELS.Resource = {
  id: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const itemState: MODELS.ItemState = {
  item: { ...resource },
  modified: false,
  currentId: undefined,
};

export const itemContext: MODELS.ItemContext = {
  state: { ...itemState },
  dispatch: () => {},
  item: { ...resource },
};

export const allowedProps: MODELS.AllowedProps = {
  create: () => {},
  update: () => {},
};

export const transformations: MODELS.Transformations = {
  outgoing: () => {},
  incoming: () => {},
};

export const endpoints: MODELS.Endpoints = {
  findById: () => '',
  create: () => '',
  update: () => '',
  delete: () => '',
};

export const pagination: MODELS.Pagination = {
  page: 1,
  pageSize: 100,
  total: 0,
};

export const searchState: MODELS.SearchState = {
  searchOptions: {},
  pagination: { ...pagination },
  searchStr: '',
  forceSearch: false,
  showFilters: false,
};

export const searchContext: MODELS.SearchContext = {
  state: searchState,
  dispatch: () => {},
  result: [],
  isFetching: false,
  hasFilters: false,
  pagination: { ...pagination },
  currentSearch: {},
};