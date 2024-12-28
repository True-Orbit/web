import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/options';
console.log('NEXTAUTH_SECRET:   1', process.env.NEXTAUTH_SECRET); // Temporary log

export const getServerSideProps = async ({ req, res }: GetServerSidePropsContext) => {
  console.log('NEXTAUTH_SECRET:   2', process.env.NEXTAUTH_SECRET); // Temporary log
  const session = await getServerSession(req, res, authOptions);
  return { props: { session } };
};
const Feed = () => {
  return <h1>Welcome to Smurf Social!</h1>;
};

export default Feed;
