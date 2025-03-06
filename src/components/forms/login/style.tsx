import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledLoginForm = styled(Paper)({
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
