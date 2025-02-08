import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.OAUTH_GITHUB_ID!,
      clientSecret: process.env.OAUTH_GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.OAUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET!,
    }),
  ],
};
