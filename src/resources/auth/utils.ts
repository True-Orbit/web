import { AxiosError } from 'axios';

import { MODELS, api } from '.';

export const isAuthenticated = ({ user }: MODELS.State) => !!user && user.role !== 'guest';

const maxRetries = 3;
const delayMs = 1000;

export const fetchCurrentUser = async () => {
  let attempt = 0;
  let tryAgain = true;
  while (tryAgain && attempt < maxRetries) {
    try {
      const user = await api.me();

      return user;
    } catch (err: unknown) {
      const error = err as AxiosError;
      const { status } = error;

      if (status === 401) {
        tryAgain = false;
        return null;
      }
      console.error(`Attempt ${attempt + 1} failed:`, error);
    }
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    attempt++;
  }
  throw new Error(`Fetching current user failed after ${maxRetries} attempts`);
};
