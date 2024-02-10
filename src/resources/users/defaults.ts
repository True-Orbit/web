import {
  defaults as baseDefaults,
} from '@/resources/base';
import { UserActionModel, UserModel, UserContextModel, UserStateModel } from '.';

export const user: UserModel = {
  ...baseDefaults.resource,
  email: '',
  firstName: '',
  lastName: '',
  profileUrl: '',
  handle: '',
  avatar: '',
};

export const state: UserStateModel = {
  ...baseDefaults.state,
  item: { ...user },
  list: [],
};

export const context: UserContextModel = {
  ...baseDefaults.context,
  state: { ...state },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: (action: UserActionModel) => {},
};
