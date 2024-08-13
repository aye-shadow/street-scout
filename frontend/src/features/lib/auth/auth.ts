import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import {authConfig} from './auth.config';
import {LoginResponse} from "@/features/users";
import axios from "axios";
import {BACKEND_API_URL} from "@/features/vendor";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const { data} = await axios.post<LoginResponse>(
            `${BACKEND_API_URL}/auth/login`,
            {
              email: credentials.email as string,
              password: credentials.password as string
            }
          );

          if (data.token) {
            return {
              role: data.role,
              email: data.email,
              expiration: data.expiresAt.toISOString(),
              jwtToken: data.token,
            };
          }
        } catch(error: any) {
          console.log("Authorization error:", error.message);
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.jwtToken = user.jwtToken;
        token.expiration = user.expiration;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role as string;
        session.user.jwtToken = token.jwtToken as string;
        session.user.expiration = token.expiration as string;
      }
      return session;
    }
  },
  session: {
    strategy: "jwt",
  },
});
