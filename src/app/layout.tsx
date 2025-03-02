"use client"

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { createTheme } from '@/app/styles/themes';

import { AuthProvider } from '@/resources/auth';
import { ProviderList, PageContainer } from '@/components/basic';
import { useBrowserColorScheme } from '@/lib/hooks';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const browserColorScheme = useBrowserColorScheme();
  const theme = createTheme({ browserColorScheme });
  const providers = [AuthProvider, CssBaseline];
  const language = 'en';

  return (
    <ThemeProvider theme={theme}>
      <ProviderList providers={providers}>
        <html lang={language}>
          <body>
            <PageContainer>
              {children}
            </PageContainer>
          </body>
        </html>
      </ProviderList>
    </ThemeProvider>
  );
}
