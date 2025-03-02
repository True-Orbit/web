import { createTheme as createMuiTheme } from '@mui/material/styles';

interface Props {
  browserColorScheme: 'light' | 'dark';
}

export const createTheme = ({ browserColorScheme }: Props) => {
  return createMuiTheme({
    colors: {},
  });
};