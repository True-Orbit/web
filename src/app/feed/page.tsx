'use client';

import { useContext } from 'react';
import { Container } from '@mui/material';
import { Context as AuthContext, useRequireAuth } from '@/resources/auth';

const Feed = () => {
  useRequireAuth();

  return (
    <Container>
      <h1>Welcome to True Orbit!</h1>
    </Container>
  );
};

export default Feed;
