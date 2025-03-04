'use client';

import { Container } from '@mui/material';
import { useRequireAuth } from '@/resources/auth';

const Feed = () => {
  useRequireAuth();

  return (
    <Container>
      <h1>Welcome to True Orbit!</h1>
    </Container>
  );
};

export default Feed;
