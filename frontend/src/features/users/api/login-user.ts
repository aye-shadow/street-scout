import axios from "axios";
import {LoginRequest, LoginResponse} from "@/features/users";
import {BACKEND_API_URL} from "@/features/vendor";

export async function loginUser(loginCredentials: LoginRequest) {
  try {
    const { data } = await axios.post<LoginResponse>(
      `${BACKEND_API_URL}/auth/login`,
      loginCredentials
    );
    return data;
  } catch (error: any) {
    return error.message;
  }
};
