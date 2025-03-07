'use client';

import { useEffect, useContext } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { setPreloginLocation } from '@/lib/utils';
import { isUserComplete } from '@/resources/users';
import { Context as AuthContext } from '..';

export const useRequireAuth = () => {
  const {
    state: { user, loading }, isAuthenticated,
  } = useContext(AuthContext);
  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    if (!loading) {
      if(!isAuthenticated) {
        setPreloginLocation(currentPath);
        router.push(`/login`);
      } else if (!isUserComplete(user)) {
        router.push(`/complete-profile`);
      }
    }
  }, [user, loading, router, currentPath]);

  return { user, loading };
};
