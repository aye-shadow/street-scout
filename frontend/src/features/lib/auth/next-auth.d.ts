import {DefaultSession, DefaultUser} from "next-auth"
import {UserRole} from "@/features/users";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      role: UserRole;
      jwtToken: string;
      expiresAt: Date;
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    role: UserRole;
    jwtToken: string;
    expiresAt: Date;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: UserRole;
    jwtToken: string;
    expiresAt: Date;
  }
}
