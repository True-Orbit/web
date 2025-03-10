'use client';

import { Container } from '@mui/material';
import { withAuth } from '@/components/hocs';

const Feed = () => {
  return (
    <Container>
      <h1>The Feed</h1>
    </Container>
  );
};

export default withAuth(Feed);
