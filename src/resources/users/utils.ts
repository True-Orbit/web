import { MODELS } from '.';

export const isUserComplete = (user: Partial<MODELS.User>) => {
  const { firstName, lastName, handle, role } = user;
  return user && role !== 'guest' && firstName && lastName && handle;
};
