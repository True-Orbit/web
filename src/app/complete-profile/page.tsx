'use client';

import { Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import { CompleteProfileForm } from '@/components/forms';

const CompleteProfile = () => {
  const router = useRouter();

  return (
    <Container>
      <CompleteProfileForm />
    </Container>
  );
};

export default CompleteProfile;
