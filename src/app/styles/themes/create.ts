'use client';

import { createTheme as createMuiTheme } from '@mui/material/styles';
import { components as componentColors } from "@/app/styles/colors";
import { models } from '.';

interface Props {
  browserColorScheme: models.ThemeNames;
}

export const createTheme = ({ browserColorScheme = 'light' }: Props) => {
  const themeColors = Object.entries(componentColors).reduce((acc, [name, comp]) => ({ ...acc, [name]: comp[browserColorScheme] }), {});
  
  return createMuiTheme({
    colors: { components: { ...themeColors } },
  });
};
