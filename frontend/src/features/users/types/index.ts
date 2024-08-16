export type UserRole = "Customer" | "Vendor" | "VENDOR" | "CUSTOMER";

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
  role: UserRole;
  token: string;
  expiresAt: Date;
}

export interface LoginRequest {
  email: string;
  password: string;
}
