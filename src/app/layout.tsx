'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { SessionProvider } from 'next-auth/react';

import { createTheme } from '@/app/styles/themes';

import { AuthProvider } from '@/resources/auth';
import { ProviderList } from '@/components/basic';

import './styles/reset.css';
import './styles/globals.scss';

interface RootLayoutProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session: any;
}

export default function RootLayout({ children, session }: RootLayoutProps) {
  const theme = createTheme();

  const providers = [AuthProvider, CssBaseline];

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <ProviderList providers={providers}>
          <html lang="en">
            <body>{children}</body>
          </html>
        </ProviderList>
      </ThemeProvider>
    </SessionProvider>
  );
}
