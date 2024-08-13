import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: `/signin`,
    verifyRequest: `/signin`,
    error: "/signin", // Error code passed in query string as ?error=
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      return !!auth?.user;
    },
  },
  providers: []
} satisfies NextAuthConfig;
