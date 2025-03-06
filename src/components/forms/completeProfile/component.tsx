import { FC } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Typography, Button } from '@mui/material';
import { Text } from '@/components/fields';
import { StyledCompleteProfileForm } from ".";

const profileSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  avatar: z.string().url({ message: 'Avatar must be a valid URL' }),
  handle: z.string().min(1, { message: 'Handle is required' }),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export const CompleteProfileForm: FC = () => {
  const methods = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: ProfileFormData) => {
    console.log('Profile data:', data);
  };

  return (
    <StyledCompleteProfileForm maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Complete Profile
      </Typography>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Text.field fullWidth margin="normal" name="firstName" />
          <Text.field fullWidth margin="normal" name="lastName" />
          <Text.field fullWidth margin="normal" name="handle" />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </FormProvider>
    </StyledCompleteProfileForm>
  );
};
