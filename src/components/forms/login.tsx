import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button, Box, Paper, Typography } from '@mui/material';
import { Email, Password } from '@/components/fields';


const loginSchema = z.object({
  email: Email.schema,
  password: Password.schema,
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const { handleSubmit, formState: { isSubmitting } } = methods;

  const onSubmit = async (data: LoginFormValues) => {
    try {

    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: 'auto' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>
      
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
          <Email.field />
          <Password.field />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
            sx={{ mt: 3, mb: 2 }}
          >
            {isSubmitting ? 'Logging in...' : 'Log in'}
          </Button>
        </Box>
      </FormProvider>
    </Paper>
  );
};