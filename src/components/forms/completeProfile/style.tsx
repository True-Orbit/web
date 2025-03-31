'use client';

import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { formStyle } from '@/components/forms/style';

export const StyledCompleteProfileForm = styled(Paper)({
  ...formStyle,

  maxWidth: 500,
  marginTop: '2rem',
  marginLeft: 'auto',
  marginRight: 'auto',
});
