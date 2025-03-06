'use client';

import React, { useReducer, useEffect, ReactNode, useContext } from 'react';
import { useRouter } from 'next/navigation';

import { ErrorContext } from '@/components/error';
import { getPreloginLocation, clearPreloginLocation } from '@/lib/utils';

import { api, Context, MODELS, DEFAULTS, reducers, isAuthenticated, fetchCurrentUser } from '.';

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const { displayError } = useContext(ErrorContext);
  const [state, dispatch] = useReducer(reducers, DEFAULTS.state);
  const router = useRouter();

  useEffect(() => {
    const initializeAuth = async () => {
      const user = await fetchCurrentUser();
      console.log('user', user);
      if (user) {
        dispatch({ type: 'setUser', payload: user });
      }
      dispatch({ type: 'setLoading', payload: false });
    };
    dispatch({ type: 'setLoading', payload: true });
    initializeAuth();
  }, []);

  const login = async ({ email, password }: MODELS.Credentials) => {
    try {
      await api.login({ email, password });
      const user = await fetchCurrentUser();

      dispatch({ type: 'setUser', payload: user });
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
      await api.register(userData);
      const user = await fetchCurrentUser();

      dispatch({ type: 'setUser', payload: user });
      const nextPage = getPreloginLocation() || '/feed';
      clearPreloginLocation();
      router.push(nextPage);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error('Registration error:', err);
      displayError(err.message || 'Registration failed');
    }
  };

  const logout = async () => {
    try {
      await api.logout();
      dispatch({ type: 'setUser', payload: null });
      router.push('/');
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      dispatch({ type: 'setUser', payload: null });
    }
  };

  const value: MODELS.Context = {
    state,
    login,
    register,
    logout,
    isAuthenticated: isAuthenticated(state),
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default AuthProvider;
