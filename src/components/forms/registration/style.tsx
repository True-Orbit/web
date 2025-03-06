import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { formStyle } from '@/components/forms/style';

export const StyledRegistrationForm = styled(Paper)({
  ...formStyle,
  
  padding: 4, 
  maxWidth: 600, 
  marginLeft: 'auto',
  marginRight: 'auto',
});
