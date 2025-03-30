import { useState, createContext, useEffect } from 'react';

import { ErrorToast, setupGlobalErrorHandlers, unsetGlobalErrorHandlers } from '.';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export const ErrorContext = createContext({ error: '', displayError: (error: string) => {} });

interface Props {
  children: React.ReactNode;
}

export const ErrorProvider = ({ children }: Props) => {
  const [error, displayError] = useState('');

  useEffect(() => {
    setupGlobalErrorHandlers();
    return () => unsetGlobalErrorHandlers();
  }, []);

  useEffect(() => {
    if (error) {
      if (['local', 'development'].includes(process.env.NODE_ENV)) {
        console.error('Error caught by hook:', error);
      } else {
        // logErrorToService(error);
      }
    }
  }, [error]);

  return (
    <ErrorContext.Provider value={{ error, displayError }}>
      {error && <ErrorToast error={error} />}
      {children}
    </ErrorContext.Provider>
  );
};
