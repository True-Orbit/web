import axios from 'axios';

const BASE_URL = process.env.DOMAIN!;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
