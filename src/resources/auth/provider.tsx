'use client';

import React, { useReducer, useEffect, ReactNode } from 'react';

import { getAuthToken, setAuthToken, removeAuthToken, setRefreshToken, removeRefreshToken } from '@/resources/auth';

import { api, Context, MODELS, DEFAULTS, reducers, isAuthenticated } from '.';

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducers, DEFAULTS.context);

  // Check for existing session on component mount
  useEffect(() => {
    const initializeAuth = async () => {
      if (!getAuthToken()) return dispatch({ type: 'setLoading', payload: false });
    };

    initializeAuth();
  }, []);

  const login = async ({ email, password }: MODELS.Credentials) => {
    dispatch({ type: 'setError', payload: undefined });
    try {
      const response = await api.login({ email, password });
      const { authToken, refreshToken, user: userData } = response.data;

      setAuthToken(authToken);
      if (refreshToken) setRefreshToken(refreshToken);

      dispatch({ type: 'setUser', payload: userData });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch({ type: 'setError', payload: err.response?.data?.message || 'Login failed' });
      throw err;
    }
  };

  const register = async (userData: MODELS.Credentials) => {
    dispatch({ type: 'setError', payload: undefined });
    try {
      const response = await api.register(userData);
      const { authToken, refreshToken, user: newUser } = response.data;

      setAuthToken(authToken);
      if (refreshToken) setRefreshToken(refreshToken);

      dispatch({ type: 'setUser', payload: newUser });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch({ type: 'setError', payload: err.response?.data?.message || 'Registration failed' });
    }
  };

  const logout = async () => {
    try {
      if (getAuthToken()) await api.logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      removeAuthToken();
      removeRefreshToken();
      dispatch({ type: 'setUser', payload: undefined });
    }
  };

  const value: MODELS.Context = {
    state,
    login,
    register,
    logout,
    isAuthenticated: isAuthenticated(state.user),
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default AuthProvider;
