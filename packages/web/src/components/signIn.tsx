import { signIn } from 'next-auth/react';

export const SignIn = () => {
  return <button onClick={() => signIn()}>Sign In</button>;
};
