import { CoreUserModel } from '@/resources/user';
import { faker } from '@faker-js/faker';

export const BRUCE_WAYNE: CoreUserModel = {
  email: 'bruceWayne@example.com',
  firstName: 'Bruce',
  lastName: 'Wayne',
  profileUrl: 'brucewayne',
  handle: 'Bruce Wayne',
  avatar: faker.image.avatar(),
};
