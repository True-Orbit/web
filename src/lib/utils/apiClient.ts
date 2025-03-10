import axios from 'axios';

const BASE_URL = process.env.DOMAIN!;

const apiClient = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  async (config) => {
    try {
      const response = await apiClient.post('/auth/csrf-token');
      const csrfToken = response.data.csrfToken;
      config.headers['X-CSRF-Token'] = csrfToken;
    } catch (error) {
      console.error(error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
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
    return Promise.reject(error);
  },
);

export default apiClient;
