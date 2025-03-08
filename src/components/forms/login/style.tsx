"use client";

import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { formStyle } from '@/components/forms/style';

export const StyledLoginForm = styled(Paper)({
  ...formStyle,
  
  maxWidth: 500,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: "2rem",
});
