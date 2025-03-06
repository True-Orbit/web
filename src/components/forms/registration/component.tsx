'use client';

import { useContext } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Box, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import * as z from 'zod';
import { Email, Password } from '@/components/fields';
import { Context as AuthContext } from '@/resources/auth';
import { StyledRegistrationForm } from '.';

const registrationSchema = z
  .object({
    email: Email.basicSchema,
    password: Password.registrationSchema,
    confirmPassword: z.string().min(1, { message: 'Please confirm your password' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type RegistrationFormValues = z.infer<typeof registrationSchema>;

export const RegistrationForm = () => {
  const { register } = useContext(AuthContext);

  const methods = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: RegistrationFormValues) => {
    try {
      register(data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <StyledRegistrationForm elevation={3}>
      <Typography variant="h5" component="h1" gutterBottom>
        Create an Account
      </Typography>

      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Email.field />

          <Password.field name="password" label="Password" />

          <Password.field name="confirmPassword" label="Confirm Password" />

          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Register'}
          </Button>
        </Box>
      </FormProvider>
    </StyledRegistrationForm>
  );
};
