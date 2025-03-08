'use client';

import { useContext, useEffect } from 'react';
import { Container } from '@mui/material';
import { useRouter } from 'next/navigation';

import { LoginForm } from '@/components/forms';
import { getPreloginLocation } from '@/lib/utils';
import { Context as AuthContext } from '@/resources/auth';

const Login = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(getPreloginLocation() || '/feed');
    }
  }, [isAuthenticated]);

  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default Login;
