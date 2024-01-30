import { BaseDBModel, BaseContextModel } from '@/resources/base';

export interface CoreUserModel {
  email: String;
  firstName: String;
  lastName: String;
  profileUrl: String;
  handle: String;
  avatar: String;
}

export interface UserModel extends BaseDBModel, CoreUserModel {}

export interface UserContextModel extends BaseContextModel {}