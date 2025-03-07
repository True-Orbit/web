import axios from 'axios';
import { setAccessToken, getAccessToken } from './token';

const BASE_URL = process.env.DOMAIN!;

const apiClient = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  function (config) {
    const accessToken = getAccessToken();
    
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


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
        const response = await apiClient.post('/auth/refresh');
        setAccessToken(response.data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;

        return apiClient(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
