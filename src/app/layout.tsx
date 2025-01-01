'use client'; // This is a client component
import { SessionProvider } from 'next-auth/react';
import { createTheme } from '@/app/styles/themes';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './styles/reset.css';
import './styles/globals.scss';

interface RootLayoutProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session: any;
}

export default function RootLayout({ children, session }: RootLayoutProps) {
  const theme = createTheme();

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <html lang="en">
          <body>{children}</body>
        </html>
      </ThemeProvider>
    </SessionProvider>
  );
}
