import { useEffect, useState, ReactNode } from 'react';
import { models as errorModels } from '@/resources/errors';
import { ErrorToast } from '.';

interface Props {
  children: ReactNode;
}

export const AsyncError = ({ children }: Props) => {
  const [error, setError] = useState<errorModels.Error | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleError = (event: any) => {
      console.error('Unhandled promise rejection:', event.reason);
      setError(event.reason);
    };

    window.addEventListener('unhandledrejection', handleError);

    return () => {
      window.removeEventListener('unhandledrejection', handleError);
    };
  }, []);
  return (
    <>
      {error && <ErrorToast error={error.message} />}
      {children}
    </>
  );
};
