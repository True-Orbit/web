'use client'; // This is a client component
import { SessionProvider } from 'next-auth/react';

import './styles/reset.css';
import './styles/globals.css';

export default function RootLayout({ children, session, ...props }: { children: React.ReactNode }) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>{children}</body>
      </html>
      `
    </SessionProvider>
  );
}
