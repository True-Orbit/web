'use client';

import { createTheme as createMuiTheme } from '@mui/material/styles';

interface Props {
  browserColorScheme: 'light' | 'dark';
}

export const createTheme = ({ browserColorScheme }: Props) => {
  console.log('browserColorScheme', browserColorScheme);

  return createMuiTheme({
    colors: {},
  });
};
