"use client";

import { useContext } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button, Box, Paper, Typography } from '@mui/material';
import { Email, Password } from '@/components/fields';
import { Context as AuthContext } from '@/resources/auth';

// @ts-ignore
const passwordSchema = process.env.APP_ENV === 'local' ? Password.basicSchema : Password.registrationSchema;

const registrationSchema = z.object({
  email: Email.basicSchema,
  // password: passwordSchema,
  password: Password.basicSchema,
  confirmPassword: z.string().min(1, { message: 'Please confirm your password' })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

export const RegistrationForm = () => {
  const { register } = useContext(AuthContext);

  const methods = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const { handleSubmit, formState: { isSubmitting } } = methods;

  const onSubmit = async (data: RegistrationFormValues) => {
    try {
      register(data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Create an Account
      </Typography>
      
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Email.field />
          
          <Password.field 
            name="password"
            label="Password"
          />
          
          <Password.field 
            name="confirmPassword" 
            label="Confirm Password" 
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
            sx={{ mt: 3, mb: 2 }}
          >
            {isSubmitting ? 'Creating Account...' : 'Register'}
          </Button>
        </Box>
      </FormProvider>
    </Paper>
  );
};