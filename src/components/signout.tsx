import { signOut } from 'next-auth/react';

export const SignOut = () => {
  return <button onClick={() => signOut()}>Sign out</button>;
};
