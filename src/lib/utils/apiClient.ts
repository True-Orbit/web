import axios from 'axios';

const BASE_URL = process.env.DOMAIN!;

const apiClient = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (
      error.response 
      && error.response.status === 401 
      && !originalRequest._retry
      && !error.response.request.responseURL.includes("/auth/refresh")
    ) {
      originalRequest._retry = true;
      try {
        await apiClient.post('/auth/refresh');

        return apiClient(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
