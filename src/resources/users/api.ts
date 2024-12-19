import { BaseApi } from '@/resources/base';
import { MODELS } from '.';

export class UserApi extends BaseApi<MODELS.User> {
  constructor() {
    super({ endpoint: 'users' });
  }
}
