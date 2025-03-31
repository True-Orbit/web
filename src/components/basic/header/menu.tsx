'use client';

import { useState, MouseEvent, useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu as MuiMenu, IconButton, MenuItem } from '@mui/material';
import classnames from 'classnames';
import { useRouter } from 'next/navigation';

import { Context as AuthContext } from '@/resources/auth';

export const Menu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { logout, isAuthenticated } = useContext(AuthContext);

  const handleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter();

  const login = async () => router.push('/login');
  const register = async () => router.push('/register');

  // Don't use this in SSR, as it will be undefined
  const pageContainer = typeof window !== 'undefined' ? window.document.getElementById('pageContainer') : undefined;

  return (
    <>
      <IconButton edge="start" color="inherit" aria-label="menu" className="menuIcon" onClick={handleMenu}>
        <MenuIcon />
      </IconButton>
      <MuiMenu
        container={pageContainer}
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem className={classnames({ hidden: isAuthenticated })} onClick={login}>
          Login
        </MenuItem>
        <MenuItem className={classnames({ hidden: isAuthenticated })} onClick={register}>
          Join
        </MenuItem>
        <MenuItem className={classnames({ hidden: !isAuthenticated })} onClick={logout}>
          Logout
        </MenuItem>
      </MuiMenu>
    </>
  );
};

export default Menu;
