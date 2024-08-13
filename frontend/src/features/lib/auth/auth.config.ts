import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: `/signin`,
    verifyRequest: `/signin`,
    error: "/signin", // Error code passed in query string as ?error=
  }, // Add providers with an empty array for now
  providers: []
} satisfies NextAuthConfig;
