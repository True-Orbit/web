import { styled } from '@mui/material/styles';

export const StyledMessage = styled('span')(({ theme: { colors: { components: { error } } } }) => ({
  color: error.message,
}));
