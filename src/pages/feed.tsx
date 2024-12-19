import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth/next';

import { authOptions } from '@/pages/api/auth/options';

export const getServerSideProps = async ({ req, res }: GetServerSidePropsContext) => {
  const session = await getServerSession(req, res, authOptions);
  return { props: { session } };
};
const Feed = () => {
  return <h1>Welcome to Smurf Social!</h1>;
};

export default Feed;
