import {
  BaseResourceModel,
  BaseContextModel,
  BaseStateModel,
  BaseActionModel,
  BaseReducerFunc,
} from '@/resources/base';
import { reducers } from '.';

export interface CoreUserModel {
  email: string;
  firstName: string;
  lastName: string;
  profileUrl: string;
  handle: string;
  avatar: string;
}

export interface UserModel extends BaseResourceModel, CoreUserModel {}

export interface UserContextModel extends BaseContextModel<UserModel> {
  state: UserStateModel;
  dispatch: (action: UserActionModel) => void;
}

export type UserReducersTypes = keyof typeof reducers;

export interface UserStateModel extends BaseStateModel<UserModel> {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface UserActionModel<P = any> extends BaseActionModel<UserReducersTypes, P> {}
export type UserReducerFunc = BaseReducerFunc<UserStateModel, UserActionModel>;

export interface UserProviderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
