import { MODELS } from ".";

export const setSearchString = (state: MODELS.SearchState, action: MODELS.Action<'setSearchString', string>) => ({
  ...state,
  searchString: action.payload,
  pagination: {
    ...state.pagination,
    page: 1,
  },
});

export const forceSearch = (state: MODELS.SearchState, action: MODELS.Action<'forceSearch', boolean>) => ({
  ...state,
  forceSearch: action.payload,
});

export const setOptions = (state: MODELS.SearchState, action: MODELS.Action<'setOptions', Record<string, unknown>>) => ({
  ...state,
  searchOptions: {
    ...state.searchOptions,
    ...action.payload,
  },
  pagination: {
    ...state.pagination,
    page: 1,
  },
});

export const replaceOptions = (state: MODELS.SearchState, action: MODELS.Action<'replaceOptions', Record<string, unknown>>) => ({
  ...state,
  searchOptions: {
    ...action.payload,
  },
  pagination: {
    ...state.pagination,
    page: 1,
  },
});

export const setPagination = (state: MODELS.SearchState, action: MODELS.Action<'setPagination', MODELS.Pagination>) => ({
  ...state,
  pagination: {
    ...state.pagination,
    ...action.payload,
  },
});

export const resetOptions = (state: MODELS.SearchState, action: MODELS.Action<'resetOptions', never>) => ({
  ...state,
  searchOptions: {},
  pagination: {
    ...state.pagination,
    page: 1,
  },
});

export const showFilters = (state: MODELS.SearchState, action: MODELS.Action<'showFilters', boolean>) => ({
  ...state,
  showFilters: action.payload,
});

export const deleteFilter = (state: MODELS.SearchState, action: MODELS.Action<'deleteFilter', string>) => {
  const searchOptions = { ...state.searchOptions };
  delete searchOptions[action.payload];

  return {
    ...state,
    searchOptions,
    pagination: {
      ...state.pagination,
      page: 1,
    },
  };
}