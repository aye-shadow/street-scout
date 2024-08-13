import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import {authConfig} from './auth.config';
import {LoginResponse} from "@/features/users";
import {z} from "zod";
import {handleError} from "@/features/lib";
import axios from "@/features/lib/axios";

export const { auth, handlers, signIn, signOut } = NextAuth({
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
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data
            const { data} = await axios.post<LoginResponse>(
              `/auth/login`,
              {
                email,
                password
              }
            );

            if (data.token) {
              return {
                role: data.role,
                email: data.email,
                expiresAt: data.expiresAt,
                jwtToken: data.token,
              };
            }
          }
        } catch(error: any) {
          handleError(error)
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
        token.expiresAt = user.expiresAt;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role as string;
        session.user.jwtToken = token.jwtToken as string;
        // @ts-expect-error
        session.user.expiresAt = token.expiresAt;
      }
      return session;
    }
  },
  session: {
    strategy: "jwt",
  },
});
