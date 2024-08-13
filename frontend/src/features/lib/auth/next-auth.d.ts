import NextAuth, { DefaultSession, DefaultUser } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      role: string;
      jwtToken: string;
      expiration: string;
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    role: string;
    jwtToken: string;
    expiration: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
    jwtToken: string;
    expiration: string;
  }
}
