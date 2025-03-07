import { defaults as baseDefaults } from '@/resources/base';
import { MODELS } from '.';

export const user: MODELS.User = {
  ...baseDefaults.resource,
  email: '',
  firstName: '',
  lastName: '',
  profileUrl: '',
  avatarUrl: '',
  handle: '',
  role: '',
};

export const guest: MODELS.User = {
  ...baseDefaults.resource,
  email: 'guest@example.com',
  firstName: 'guest',
  lastName: '',
  profileUrl: '',
  avatarUrl: '',
  handle: '',
  role: 'guest',
};

export const SearchState: MODELS.SearchState = {
  ...baseDefaults.searchState,
};

export const searchContext: MODELS.SearchContext = {
  ...baseDefaults.searchContext,
  result: [],
  state: { ...SearchState },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: (action: MODELS.SearchAction) => {},
};
