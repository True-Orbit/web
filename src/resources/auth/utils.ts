import { MODELS, api } from '.';

export const isAuthenticated = ({ user }: MODELS.State) => !!user && !user.roles.includes('guest');

const maxRetries = 3;
const delayMs = 1000;

export const fetchCurrentUser = async () => {
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      return await api.me();
    } catch (error) {
      console.error(`Attempt ${attempt + 1} failed:`, error);
    }
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    attempt++;
  }
  throw new Error(`Fetching current user failed after ${maxRetries} attempts`);
}