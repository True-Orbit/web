import { Api } from '@/resources/base';
import { MODELS } from '.';

export class UserApi extends Api<MODELS.User> {
  constructor() {
    super('users');
  }
}
