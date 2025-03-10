import axios from 'axios';
import { getCsrfExpiration, getCsrfToken, setCsrfToken, setCsrfExpiration } from '@/lib/utils';

const BASE_URL = process.env.DOMAIN!;

const apiClient = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    if (config.url?.includes('/auth') || config.url?.includes('/refresh')) {
      return config;
    }

    const storedCsrfToken = getCsrfToken();
    const csrfExpiration = getCsrfExpiration();
    if (storedCsrfToken && csrfExpiration && csrfExpiration < Date.now()) {
      config.headers['x-csrf-token'] = storedCsrfToken;
    } else {
      try {
        const response = await apiClient.post('/auth/csrf-token');
        const { token: csrfToken, expiration } = response.data;
        setCsrfToken(csrfToken);
        setCsrfExpiration(expiration);
        config.headers['x-csrf-token'] = csrfToken;
      } catch (error) {
        console.error(error);
      }
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
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      !error.response.request.responseURL.includes('/auth/refresh') &&
      !error.response.request.responseURL.includes('/auth/csrf-token')
    ) {
      originalRequest._retry = true;
      try {
        const response = await apiClient.post('/auth/refresh');

        if (response.status !== 200) {
          console.error('Failed to refresh token');
          return Promise.reject(response);
        }

        return apiClient(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
