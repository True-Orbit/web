import { MODELS as USER_MODELS } from '@/resources/users';
import { faker } from '@faker-js/faker';

export const BRUCE_WAYNE: USER_MODELS.Core = {
  email: 'bruceWayne@example.com',
  firstName: 'Bruce',
  lastName: 'Wayne',
  profileUrl: 'brucewayne',
  handle: 'Bruce Wayne',
  avatar: faker.image.avatar(),
};
