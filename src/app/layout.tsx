'use client';
import { useMemo } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import { createTheme } from '@/app/styles/themes';

import { ProviderList, PageContainer, Header } from '@/components/basic';
import { ErrorProvider, ErrorBoundary, AsyncError } from '@/components/error';
import { useBrowserColorScheme } from '@/lib/hooks';
import { AuthProvider } from '@/resources/auth';

interface RootLayoutProps {
  children: React.ReactNode;
}

const providers = [ErrorBoundary, ErrorProvider, AuthProvider, CssBaseline, AsyncError, PageContainer];
const language = 'en';

export default function RootLayout({ children }: RootLayoutProps) {
  const browserColorScheme = useBrowserColorScheme();
  const theme = useMemo(() => createTheme({ browserColorScheme }), [browserColorScheme]);

  return (
    <html lang={language}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ProviderList providers={providers}>
              <Header />
              {children}
            </ProviderList>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
