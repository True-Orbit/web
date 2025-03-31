import React from 'react';
import { Toolbar, Typography } from '@mui/material';
import { StyledHeader, Menu } from '.';

export const Header = () => (
  <StyledHeader position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        True Orbit
      </Typography>
      <Menu />
    </Toolbar>
  </StyledHeader>
);
