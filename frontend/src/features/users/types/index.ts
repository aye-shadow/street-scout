export type UserRole = "CUSTOMER" | "VENDOR";

export interface UserRegistration {
  email: string;
  name: string;
  password: string;
  role: UserRole;
}


export interface UserProfile {}

export interface LoginResponse {
  id: string;
  email: string;
  role: string;
  token: string;
  expiresAt: Date;
}

export interface LoginRequest {
  email: string;
  password: string;
}
