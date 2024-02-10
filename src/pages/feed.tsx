import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth/next';

import { Provider as UserProvider } from '@/resources/users';
import { MODELS as BASE_MODELS } from '@/resources/base';

import { Test } from '@/components/test';
import { SignOut } from '@/components/signOut';
import { SignIn } from '@/components/signIn';

import { authOptions } from '@/pages/api/auth/options';

export const getServerSideProps = async ({ req, res }: GetServerSidePropsContext) => {
  const session = await getServerSession(req, res, authOptions);
  return { props: { session } };
};

interface FeedProps {
  session: BASE_MODELS.Session | null;
}

const Feed = ({ session }: FeedProps) => {
  return (
    <UserProvider>
      {session ? <SignOut /> : <SignIn />}

      <Test />
      <h1>Welcome to Smurf Social!</h1>
    </UserProvider>
  );
};

export default Feed;
