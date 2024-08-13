"use server"

import {signIn} from "@/features/lib/auth";

export async function signInUser(formData: FormData) {
  try {
    await signIn("credentials", formData)
  } catch (error: any) {
    return error.message;
  }
};
