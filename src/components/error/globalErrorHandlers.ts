const setupOnError = () => {
  window.onerror = (message, source, line, column, error) => {
    if (['local', 'development'].includes(process.env.NODE_ENV)) {
      console.error('Global error:', error);
    } else {
      // logErrorToService({ message, source, line, column, error });
    }

    // Return true to prevent the default browser error handler
    return true;
  };
};

const setupOnUnhandledRejection = () => {
  window.onunhandledrejection = (event) => {
    if (['local', 'development'].includes(process.env.NODE_ENV)) {
      console.error('Unhandled Promise Rejection:', event.reason);
    } else {
      // logErrorToService(event.reason);
    }

    event.preventDefault();
  };
};

export const setupGlobalErrorHandlers = () => {
  setupOnError();
  setupOnUnhandledRejection();
};

export const unsetGlobalErrorHandlers = () => {
  window.onerror = null;
  window.onunhandledrejection = null;
};
