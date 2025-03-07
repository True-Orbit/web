import { MODELS } from ".";

export const isUserComplete = (user: Partial<MODELS.User>) => {
  const { firstName, lastName, handle } = user;
  return user && firstName && lastName && handle;
};