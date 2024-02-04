import { Provider as UserProvider } from '@/resources/user';
import { Test } from '@/components/test';
import { SignOut } from '@/components/signout';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/options';

export const getServerSideProps = async ({ req, res }: any) => {
  const session = await getServerSession(req, res, authOptions);
  return { props: { session } };
};

const Feed = ({ session }) => {
  console.log('session: ', session);
  return (
    <UserProvider>
      <SignOut />
      <Test />
      <h1>Welcome to Smurf Social!</h1>
    </UserProvider>
  );
};

export default Feed;
