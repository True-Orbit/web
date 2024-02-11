import { defaults as baseDefaults } from '@/resources/base';
import { MODELS } from '.';

export const user: MODELS.User = {
  ...baseDefaults.resource,
  email: '',
  firstName: '',
  lastName: '',
  profileUrl: '',
  handle: '',
  avatar: '',
};

export const state: MODELS.State = {
  ...baseDefaults.state,
  item: { ...user },
  list: [],
};

export const context: MODELS.Context = {
  ...baseDefaults.context,
  state: { ...state },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: (action: MODELS.Action) => {},
};
