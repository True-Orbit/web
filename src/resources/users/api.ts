import { apiClient } from '@/lib/utils';
import { BaseApi } from '@/resources/base';
import { MODELS } from '.';

class UserApi extends BaseApi<MODELS.User> {
  constructor() {
    super({ endpoint: '/api/users', resourceName: 'user' });
  }

  public async updateMe(updates: Partial<MODELS.User>): Promise<MODELS.User> {
    const data = await apiClient.patch(`${this.endpoint}/me`, { me: updates });
    return this.transformations.incoming(data) as MODELS.User;
  }
}

export const api = new UserApi();
