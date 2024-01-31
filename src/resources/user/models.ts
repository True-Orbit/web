import { ReactNode } from 'react';
import { BaseResourceModel, BaseContextModel, BaseStateModel, BaseActionModel, BaseReducerFunc, BaseProviderProps } from '@/resources/base';
import { reducers } from '.';

export interface CoreUserModel {
  email: String;
  firstName: String;
  lastName: String;
  profileUrl: String;
  handle: String;
  avatar: String;
}

export interface UserModel extends BaseResourceModel, CoreUserModel {}

export interface UserContextModel extends BaseContextModel<UserModel> {
  state: UserStateModel;
  dispatch: (action: UserActionModel) => void;
}

export type UserReducersTypes = keyof typeof reducers;

export interface UserStateModel extends BaseStateModel {
  user: UserModel;
  users: { [key: string]: UserModel };
}

export interface UserActionModel extends BaseActionModel<UserReducersTypes> {}
export type UserReducerFunc = BaseReducerFunc<UserStateModel, UserActionModel>;

export interface UserProviderProps {
  children?: ReactNode;
}