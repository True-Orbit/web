import { ThemeOptions, createTheme as createMuiTheme } from '@mui/material/styles';
import { models } from '@/app/styles/colors';

declare module '@mui/material/styles' {
  interface Theme {
    colors: models.Colors;
  }

  interface ThemeOptions {
    colors: models.Colors;
  }
}

export const createTheme = (name: string = 'light') =>
  createMuiTheme({
    colors: {},
  });

export default createTheme;
