import axios from 'axios';
import { getCsrfExpiration, getCsrfToken, setCsrfToken, setCsrfExpiration } from '@/lib/utils';

const fetchCsrfToken = async () => {
  try {
    const response = await apiClient.post('/auth/csrf-token');
    const { token: csrfToken, expiration } = response.data;
    setCsrfToken(csrfToken);
    setCsrfExpiration(expiration);
    return csrfToken;
  } catch (error) {
    console.error(error);
  }
};

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
    if (storedCsrfToken && csrfExpiration && Date.now() < csrfExpiration) {
      config.headers['x-csrf-token'] = storedCsrfToken;
    } else {
      try {
        config.headers['x-csrf-token'] = await fetchCsrfToken();
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
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      // Handle CSRF token error
      if (error.response.data?.error === 'Invalid CSRF token') {
        try {
          originalRequest.headers['x-csrf-token'] = await fetchCsrfToken();
          return apiClient(originalRequest);
        } catch (error) {
          console.error(error);
        }
      }

      // Handle all other error (try to refresh token)
      if (
        error.response.data?.error === 'Invalid authentication token' &&
        !error.response.request.responseURL.includes('/auth/refresh')
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
    }
    return Promise.reject(error);
  },
);

export default apiClient;
