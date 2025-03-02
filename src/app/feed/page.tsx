"use client";

import { useContext } from 'react';
import { Container } from '@mui/material';
import { Context as AuthContext } from '@/resources/auth';

const Feed = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log('isAuthenticated: ', isAuthenticated);
  return (
    <Container>
      <h1>Welcome to True Orbit!</h1>
    </Container>
  );
};

export default Feed;
