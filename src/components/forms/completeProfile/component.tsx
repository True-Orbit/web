"use client";

import { FC, useContext } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Typography, Button } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';

import { Text } from '@/components/fields';
import { api as userApi } from '@/resources/users';
import { Context as AuthContext } from '@/resources/auth';
import { StyledCompleteProfileForm } from ".";

const profileSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  handle: z.string().min(1, { message: 'Handle is required' }),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export const CompleteProfileForm: FC = () => {
  const { state: { user }, auth } = useContext(AuthContext);
  const methods = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: ProfileFormData) => {
    userApi.update({ id: user.id, ...data });
    auth();
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
    </StyledCompleteProfileForm>
  );
};
