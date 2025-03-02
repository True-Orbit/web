'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { createTheme } from '@/app/styles/themes';

import { AuthProvider } from '@/resources/auth';
import { ProviderList } from '@/components/basic';

import './styles/reset.css';
import './styles/globals.scss';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const theme = createTheme();

  const providers = [AuthProvider, CssBaseline];

  return (
    <ThemeProvider theme={theme}>
      <ProviderList providers={providers}>
        <html lang="en">
          <body>{children}</body>
        </html>
      </ProviderList>
    </ThemeProvider>
  );
}
