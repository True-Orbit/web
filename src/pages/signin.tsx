import { signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/pages/api/auth/options';

export const getServerSideProps = async ({ req, res }: any) => {
  const session = await getServerSession(req, res, authOptions);

  if (session?.user) {
    res.setHeader('Location', '/feed');
    res.statusCode = 302;
    res.end();
    return { props: {} }
  }
  return {
    props: { session }
  }
}

export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn('github')}>Sign in with GitHub</button>
    </div>
  )
}