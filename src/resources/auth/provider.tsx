'use client';

import React, { useReducer, useEffect, ReactNode, useContext } from 'react';
import { useRouter } from 'next/navigation';

import { ErrorContext } from '@/components/error';
import { getPreloginLocation, clearPreloginLocation } from '@/lib/utils';
import { getAuthToken, setAuthToken, removeAuthToken, setRefreshToken, removeRefreshToken } from '@/resources/auth';



import { api, Context, MODELS, DEFAULTS, reducers, isAuthenticated } from '.';

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const { displayError } = useContext(ErrorContext);
  const [state, dispatch] = useReducer(reducers, DEFAULTS.context);
  const router = useRouter();

  useEffect(() => {
    const initializeAuth = async () => {
      if (!getAuthToken()) return dispatch({ type: 'setLoading', payload: false });
    };

    initializeAuth();
  }, []);

  const login = async ({ email, password }: MODELS.Credentials) => {
    try {
      const response = await api.login({ email, password });
      const { authToken, refreshToken, user: userData } = response.data;

      setAuthToken(authToken);
      if (refreshToken) setRefreshToken(refreshToken);

      dispatch({ type: 'setUser', payload: userData });
      const nextPage = getPreloginLocation() || '/feed';
      clearPreloginLocation();
      router.push(nextPage);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      displayError(err.message || 'Login failed');
      throw err;
    }
  };

  const register = async (userData: MODELS.Credentials) => {
    try {
      const response = await api.register(userData);
      const { authToken, refreshToken, user: newUser } = response.data;

      setAuthToken(authToken);
      if (refreshToken) setRefreshToken(refreshToken);

      dispatch({ type: 'setUser', payload: newUser });
      const nextPage = getPreloginLocation() || '/feed';
      clearPreloginLocation();
      router.push(nextPage);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log('Registration error:', err);
      displayError(err.message || 'Registration failed');
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
