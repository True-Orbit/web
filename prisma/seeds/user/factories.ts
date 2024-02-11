import { faker } from '@faker-js/faker';
import { MODELS as USER_MODELS } from '@/resources/users';
import * as changeCase from 'change-case';

export const randomUser = (): USER_MODELS.Core => {
  const email = faker.internet.email();
  const firstName = faker.person.firstName();
  const lastName = faker.person.firstName();
  const handle = faker.internet.displayName({ firstName, lastName });
  const profileUrl = changeCase.snakeCase(handle);
  const avatar = faker.image.avatar();

  return {
    email,
    firstName,
    lastName,
    profileUrl,
    handle,
    avatar,
  };
};
