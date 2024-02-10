import {
  defaultContext as baseDefaultContext,
  defaultState as baseDefaultstate,
  defaultResource,
} from '@/resources/base';
import { UserActionModel, UserModel, UserContextModel, UserStateModel } from '.';

export const defaultUser: UserModel = {
  ...defaultResource,
  email: '',
  firstName: '',
  lastName: '',
  profileUrl: '',
  handle: '',
  avatar: '',
};

export const defaultState: UserStateModel = {
  ...baseDefaultstate,
  item: { ...defaultUser },
  list: [],
};

export const defaultContext: UserContextModel = {
  ...baseDefaultContext,
  state: { ...defaultState },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: (action: UserActionModel) => {},
};
