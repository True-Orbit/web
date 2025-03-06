import { MODELS } from ".";

export const isUserComplete = (user: MODELS.User) => {
  const { firstName, lastName, handle } = user;
  return user && firstName && lastName && handle;
};