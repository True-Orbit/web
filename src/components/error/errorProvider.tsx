import { useState, createContext, useEffect } from 'react';

import { Toast, setupGlobalErrorHandlers, unsetGlobalErrorHandlers } from '.';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export const ErrorContext = createContext({ error: null, displayError: (error: any) => {} });

interface Props {
  children: React.ReactNode;
}

export const ErrorProvider = ({ children }: Props) => {
  const [error, displayError] = useState(null);

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
      {error && <Toast error={error} />}
      {children}
    </ErrorContext.Provider>
  );
};
