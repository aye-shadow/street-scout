export type UserRole = "CUSTOMER" | "VENDOR";

export interface UserRegistration {
  email: string;
  name: string;
  password: string;
  role: UserRole
}


export interface UserProfile {}