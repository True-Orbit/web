"use client";

import { AxiosError } from 'axios';

import { MODELS as USER_MODELS, defaults as userDefaults } from '@/resources/users';
import { api } from '.';

export const isAuthenticated = (user: Partial<USER_MODELS.User>) => !!user?.role && user.role !== 'guest';

const maxRetries = 3;
const delayMs = 1000;

export const fetchCurrentUser = async (): Promise<USER_MODELS.User> => {
  let attempt = 0;
  let tryAgain = true;
  while (tryAgain && attempt < maxRetries) {
    try {
      const { data: user } = await api.me();
      return user;
    } catch (err: unknown) {
      const error = err as AxiosError;
      const { status } = error;

      if (status === 401) {
        tryAgain = false;
        return userDefaults.guest;
      }
      console.error(`Attempt ${attempt + 1} failed:`, error);
    }
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    attempt++;
  }
  throw new Error(`Fetching current user failed after ${maxRetries} attempts`);
};