"use server"

import axios from "axios";
import {UserProfile, UserRegistration} from "@/features/users";
import {handleError} from "src/features/lib";
import {BACKEND_API_URL} from "@/features/vendor";

export async function registerUser(userInfo: UserRegistration): Promise<UserProfile> {
  try {
    const { data } = await axios.post<UserProfile>(
      `${BACKEND_API_URL}/auth/register`,
      userInfo
    );
    return data;
  } catch (error: any) {
    return handleError(error);
  }
}
