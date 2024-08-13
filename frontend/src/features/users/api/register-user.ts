"use server"

import {UserProfile, UserRegistration} from "@/features/users";
import {handleError} from "src/features/lib";
import axios from "@/features/lib/axios";

export async function registerUser(userInfo: UserRegistration): Promise<UserProfile> {
  try {
    const { data } = await axios.post<UserProfile>(
      `/auth/register`,
      userInfo
    );
    return data;
  } catch (error: any) {
    return handleError(error);
  }
}
