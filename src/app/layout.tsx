'use client';
import { useMemo } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import { createTheme } from '@/app/styles/themes';

import { ProviderList, PageContainer } from '@/components/basic';
import { ErrorProvider } from '@/components/error';
import { useBrowserColorScheme } from '@/lib/hooks';
import { AuthProvider } from '@/resources/auth';

interface RootLayoutProps {
  children: React.ReactNode;
}

const providers = [ErrorProvider, AuthProvider, CssBaseline];
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
              <PageContainer>{children}</PageContainer>
            </ProviderList>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
