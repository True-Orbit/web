import { useContext, useEffect } from 'react';
import { Provider as UserProvider } from '@/resources/user';
import { Test } from '@/components/test';

const Home = () => {
  return (
    <UserProvider>
      <Test />
      <h1>Welcome to Smurf Social!</h1>
    </UserProvider>
  );
};

export default Home;
