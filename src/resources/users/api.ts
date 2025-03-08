import { BaseApi } from '@/resources/base';
import { MODELS } from '.';

class UserApi extends BaseApi<MODELS.User> {
  constructor() {
    super({ endpoint: '/api/users', resourceName: 'user' });
  }
}

export const api = new UserApi();