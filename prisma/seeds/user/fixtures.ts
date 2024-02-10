import { CoreUserModel } from '@/resources/users';
import { faker } from '@faker-js/faker';

export const BRUCE_WAYNE: CoreUserModel = {
  email: 'bruceWayne@example.com',
  firstName: 'Bruce',
  lastName: 'Wayne',
  profileUrl: 'brucewayne',
  handle: 'Bruce Wayne',
  avatar: faker.image.avatar(),
};
