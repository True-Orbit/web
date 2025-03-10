'use client';

import React, { useReducer, useEffect, ReactNode, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import { ErrorContext } from '@/components/error';
import { getPreloginLocation, apiClient } from '@/lib/utils';
import { isUserComplete, MODELS as USER_MODELS } from '@/resources/users';
import { api, Context, MODELS, DEFAULTS, reducers, isAuthenticated, fetchCurrentUser } from '.';

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const { displayError } = useContext(ErrorContext);
  const [state, dispatch] = useReducer(reducers, DEFAULTS.state);
  const router = useRouter();
  const currentPath = usePathname();

  const auth = async (): Promise<Partial<USER_MODELS.User>> => {
    dispatch({ type: 'setLoading', payload: true });
    const user = await fetchCurrentUser();
    dispatch({ type: 'setUser', payload: user });
    dispatch({ type: 'setLoading', payload: false });
    return user;
  };

  useEffect(() => {
    const initialAuth = async () => {
      const user = await auth();
      if (user && isAuthenticated(user) && !isUserComplete(user) && currentPath !== '/complete-profile') {
        router.push('/complete-profile');
      }
    };
    initialAuth();
  }, []);

  const login = async ({ email, password }: MODELS.Credentials) => {
    try {
      await api.login({ email, password });
      const user = await auth();
      if (user && isAuthenticated(user)) {
        if (!isUserComplete(user)) {
          router.push('/complete-profile');
        } else {
          const preloginLocation = getPreloginLocation();
          if (preloginLocation) {
            router.push(preloginLocation);
          } else {
            router.push('/feed');
          }
        }
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      displayError(err.message || 'Login failed');
      throw err;
    }
  };

  const register = async (userData: MODELS.Credentials) => {
    try {
      await api.register(userData);
      const user = await auth();
      if (user && isAuthenticated(user)) {
        router.push('/complete-profile');
      }

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
    auth,
    isAuthenticated: isAuthenticated(state.user),
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default AuthProvider;
