import { useContext } from 'react';
import { UserContext } from '@/resources/user';

const Home = () => {
  const { state, getAll } = useContext(UserContext);
  return (
    <>
      <h1>Welcome to Smurf Social!</h1>
    </>
  );
};

export default Home;
