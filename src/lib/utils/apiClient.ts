import axios from 'axios';

import { getAuthToken, setAuthToken, removeAuthToken, getRefreshToken, removeRefreshToken } from '@/resources/auth';

const BASE_URL = process.env.DOMAIN!;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 Unauthorized and not already retrying
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();
        if (refreshToken) {
          const response = await axios.post(`${BASE_URL}/auth/refresh`, { refreshToken });
          const { token } = response.data;

          setAuthToken(token);

          originalRequest.headers.Authorization = `Bearer ${token}`;
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        removeAuthToken();
        removeRefreshToken();
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }

      removeAuthToken();
      window.location.href = '/login';
    }

    return Promise.reject(error);
  },
);

export default apiClient;
