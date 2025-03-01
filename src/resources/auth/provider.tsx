import React, { createContext, useContext, useState, useEffect } from 'react';
import api, { tokenStorage } from '@/resources/base';

// Create the auth context
const AuthContext = createContext(null);

// Custom hook for using the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check for existing session on component mount
  useEffect(() => {
    const initializeAuth = async () => {
      // Skip if no token exists
      if (!tokenStorage.getToken()) {
        setLoading(false);
        return;
      }
      
      try {
        const response = await api.auth.getCurrentUser();
        setUser(response.data);
      } catch (err) {
        // Token might be invalid or expired
        console.error('Authentication initialization error:', err);
        tokenStorage.clearAll();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    setError(null);
    try {
      const response = await api.auth.login({ email, password });
      const { token, refreshToken, user: userData } = response.data;
      
      tokenStorage.setToken(token);
      if (refreshToken) tokenStorage.setRefreshToken(refreshToken);
      
      setUser(userData);
      return userData;
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    }
  };

  // Register function
  const register = async (userData) => {
    setError(null);
    try {
      const response = await api.auth.register(userData);
      const { token, refreshToken, user: newUser } = response.data;
      
      tokenStorage.setToken(token);
      if (refreshToken) tokenStorage.setRefreshToken(refreshToken);
      
      setUser(newUser);
      return newUser;
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      throw err;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      if (tokenStorage.getToken()) {
        await api.auth.logout();
      }
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      tokenStorage.clearAll();
      setUser(null);
    }
  };

  // Value to be provided by the context
  const value = {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    login,
    register,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;