import { apiClient } from '@/lib/utils';

import { MODELS } from '.';

export const login = (credentials: MODELS.Credentials) => apiClient.post('/auth/login', credentials);

export const register = (userData: MODELS.Credentials) => apiClient.post('/auth/register', userData);

export const logout = () => apiClient.post('/auth/logout');

export const me = () => apiClient.get('/api/users/me');
