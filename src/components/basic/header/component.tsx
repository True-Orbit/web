import React from 'react';
import { Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StyledHeader, Menu } from '.';

export const Header = () => {
  const theme = useTheme();

  return (
    <StyledHeader position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          True Orbit
        </Typography>
        <Menu />
      </Toolbar>
    </StyledHeader>
  );
};
