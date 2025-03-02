import { apiClient } from '@/lib/utils';

import { models } from '.';

export const login = (credentials: models.Credentials) => apiClient.post('/auth/login', credentials);

export const register = (userData: models.Credentials) => apiClient.post('/auth/register', userData);

export const logout = () => apiClient.post('/auth/logout');
