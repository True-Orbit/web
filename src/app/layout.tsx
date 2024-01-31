import './styles/reset.css';
import './styles/globals.css';

import { Provider as UserProvider } from '@/resources/user';
import { Test } from '@/components/test';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
        <UserProvider>
          <Test />
          <body>{children}</body>
        </UserProvider>
      </html>
  );
}
