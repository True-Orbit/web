import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { formStyle } from '@/components/forms/style';

export const StyledCompleteProfileForm = styled(Box)({
  ...formStyle,

  padding: 4, 
  maxWidth: 500,
  marginLeft: 'auto',
  marginRight: 'auto',
});
