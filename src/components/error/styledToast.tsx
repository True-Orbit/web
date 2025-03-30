import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// export const StyledToast = styled(Box)(({ theme }) => ({
export const StyledToast = styled(Box)({
  position: 'fixed',
  bottom: '1rem',
  left: "1rem",
  padding: 20,
  borderRadius: 4,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  textAlign: 'center',
  zIndex: 1000,
  maxWidth: '80%',
  width: 400,
  margin: 'auto',

  '& h3': {
    margin: '0 0 10px',
    color: 'red',
  },

  '& button': {
    cursor: 'pointer',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: 4,

    '&:hover': {
      backgroundColor: 'darkred',
    },
  },
});
