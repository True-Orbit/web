'use client';

import { useContext } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Box, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import * as z from 'zod';
import { Email, Password } from '@/components/fields';
import { Context as AuthContext } from '@/resources/auth';

import { StyledLoginForm } from '.';

const loginSchema = z.object({
  email: Email.basicSchema,
  password: Password.basicSchema,
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const zodMethods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = zodMethods;

  const { login } = useContext(AuthContext);

  const onSubmit = async (data: LoginFormValues) => {
    try {
      login(data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <StyledLoginForm elevation={3}>
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>

      <FormProvider {...zodMethods}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Email.field fullWidth margin="normal"/>
          <Password.field fullWidth margin="normal" />

          <Button type="submit" fullWidth variant="contained" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Log in'}
          </Button>
        </Box>
      </FormProvider>
    </StyledLoginForm>
  );
};
