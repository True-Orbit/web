'use client';

import { useEffect, useContext } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { setPreloginLocation } from '@/lib/utils';
import { Context as AuthContext } from '..';

export const useRequireAuth = () => {
  const {
    state: { user, loading },
  } = useContext(AuthContext);
  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      setPreloginLocation(currentPath);
      router.push(`/login`);
    }
  }, [user, loading, router, currentPath]);

  return { user, loading };
};
