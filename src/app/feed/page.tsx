'use client';

import { Container } from '@mui/material';
import { withAuth } from '@/components/hocs';

const Feed = () => {
  return (
    <Container>
      <h1>Welcome to True Orbit!</h1>
    </Container>
  );
};

export default withAuth(Feed);
