import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledRegistrationForm = styled(Paper)({
  p: 4, 
  maxWidth: 600, 
  mx: 'auto',

  "button[type='submit']": {
    mt: 3, 
    mb: 2,
  },
});
