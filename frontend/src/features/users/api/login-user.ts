"use server"

import {LoginRequest, LoginResponse} from "@/features/users";
import axios from "@/features/lib/axios";

export async function loginUser(loginCredentials: LoginRequest) {
  try {
    const { data } = await axios.post<LoginResponse>(
      `/auth/login`,
      loginCredentials
    );
    return data;
  } catch (error: any) {
    return error.message;
  }
};
