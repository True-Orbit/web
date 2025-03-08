'use client';

import { useEffect, useContext } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Context as AuthContext } from '..';

export const useRequireAuth = () => {
  const {
    state: { user, loading }, afterAuthRedirect,
  } = useContext(AuthContext);
  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    if (!loading) {
      afterAuthRedirect(user);
    }
  }, [user, loading, router, currentPath]);

  return { user, loading };
};
