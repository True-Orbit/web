import { AUTH_TOKEN_NAME, REFRESH_TOKEN_NAME } from '../../resources/auth';

export const getAuthToken = () => {
  return localStorage.getItem(AUTH_TOKEN_NAME);
};

export const setAuthToken = (token: string) => {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
};

export const removeAuthToken = () => {
  localStorage.removeItem(AUTH_TOKEN_NAME);
};

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_NAME);
};

export const setRefreshToken = (token: string) => {
  localStorage.setItem(REFRESH_TOKEN_NAME, token);
};

export const removeRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN_NAME);
};
