import { useEffect, useState, ReactNode } from 'react';
import { models as errorModels } from "@/resources/error"
import { ErrorToast } from '.';

interface Props {
  children: ReactNode;
}

export const AsyncError = ({ children }: Props) => {
  const [error, setError] = useState<errorModels.Error | null>(null);
  
  useEffect(() => {
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
      {error && <ErrorToast error={error.message}/>}
      {children}
    </>
  );
}