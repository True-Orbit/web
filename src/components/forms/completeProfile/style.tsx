import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCompleteProfileForm = styled(Box)({
  p: 4, 
  maxWidth: 500,
  mx: 'auto',

  form: {
    mt: 2,
  },

  "button[type='submit']": {
    mt: 3, 
    mb: 2,
  },
});
