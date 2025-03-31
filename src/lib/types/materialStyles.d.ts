import { models } from '@/app/styles/colors';

declare module '@mui/material/styles' {
  interface Theme {
    colors: models.componentColors;
  }

  interface ThemeOptions {
    colors: models.componentColors;
  }
}
