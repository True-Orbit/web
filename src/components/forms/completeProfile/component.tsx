'use client';

import { FC, useContext, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Typography, Button } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';

import { ErrorMessage } from '@/components/error';
import { Text } from '@/components/fields';
import { Context as AuthContext } from '@/resources/auth';
import { api as userApi } from '@/resources/users';
import { StyledCompleteProfileForm } from '.';

const profileSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  handle: z.string().min(1, { message: 'Handle is required' }),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export const CompleteProfileForm: FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    state: { user },
    auth,
  } = useContext(AuthContext);
  const methods = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: ProfileFormData) => {
    try {
      await userApi.updateMe({ id: user.id, ...data });
      auth('/feed');
    } catch {
      setErrorMessage('Failed to update profile. Please try again.');
    }
  };

  return (
    <StyledCompleteProfileForm elevation={3}>
      <Typography variant="h4" component="h1" gutterBottom>
        Complete Profile
      </Typography>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Text.field name="firstName" />
          <Text.field name="lastName" />
          <Text.field name="handle" />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </FormProvider>
      <ErrorMessage message={errorMessage} variant="block" />
    </StyledCompleteProfileForm>
  );
};
