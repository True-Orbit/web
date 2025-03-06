import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container, Box, Typography, TextField, Button } from '@mui/material';

// Define the validation schema with Zod
const profileSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  avatar: z.string().url({ message: 'Avatar must be a valid URL' }),
  handle: z.string().min(1, { message: 'Handle is required' }),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export const CompleteProfileForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log('Profile data:', data);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Complete Profile
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="First Name"
            fullWidth
            margin="normal"
            {...register('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName ? errors.firstName.message : ''}
          />
          <TextField
            label="Last Name"
            fullWidth
            margin="normal"
            {...register('lastName')}
            error={!!errors.lastName}
            helperText={errors.lastName ? errors.lastName.message : ''}
          />
          <TextField
            label="Avatar URL"
            fullWidth
            margin="normal"
            {...register('avatar')}
            error={!!errors.avatar}
            helperText={errors.avatar ? errors.avatar.message : ''}
          />
          <TextField
            label="Handle"
            fullWidth
            margin="normal"
            {...register('handle')}
            error={!!errors.handle}
            helperText={errors.handle ? errors.handle.message : ''}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};
