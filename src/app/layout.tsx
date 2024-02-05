'use client'; // This is a client component
import { SessionProvider } from 'next-auth/react';

import './styles/reset.css';
import './styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session: any;
}

export default function RootLayout({ children, session }: RootLayoutProps) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>{children}</body>
      </html>
      `
    </SessionProvider>
  );
}
