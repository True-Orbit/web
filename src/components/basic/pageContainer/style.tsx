import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledPageContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh', 
  margin: 0,
  padding: 0,
  overflow: 'hidden',
}));