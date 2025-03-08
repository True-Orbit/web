import { useEffect, useContext, ComponentType } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import { setPreloginLocation } from '@/lib/utils';
import { Context as AuthContext } from '@/resources/auth';

export const withAuth = <P extends object>(WrappedComponent: ComponentType<P>): ComponentType<P> => {
  const AuthComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const currentPath = usePathname();
    const {
      state: { loading },
      isAuthenticated,
    } = useContext(AuthContext);

    useEffect(() => {
      if (!loading && !isAuthenticated) {
        setPreloginLocation(currentPath);
        router.push('/login');
      }
    }, [loading, router]);

    // // Optionally, display a loading indicator while authentication status is being determined
    // if (loading || !user) {
    //   return <div>Loading...</div>;
    // }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};
