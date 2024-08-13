import {DefaultSession, DefaultUser} from "next-auth"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      role: string;
      jwtToken: string;
      expiresAt: Date;
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    role: string;
    jwtToken: string;
    expiresAt: Date;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
    jwtToken: string;
    expiresAt: Date;
  }
}
