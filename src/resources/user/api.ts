import { BaseApi } from "@/resources/base";
import { UserModel } from ".";

export class UserApi extends BaseApi<UserModel> {
  constructor() {
    super('users');
  }
}