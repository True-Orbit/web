import { models } from '@/app/styles/colors';

declare module '@mui/material/styles' {
  interface Theme {
    colors: models.Colors;
  }

  interface ThemeOptions {
    colors: models.Colors;
  }
}
