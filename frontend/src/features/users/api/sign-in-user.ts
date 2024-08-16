"use server"

import {signIn} from "@/features/lib/auth";

export async function signInUser(formData: FormData) {
  try {
    await signIn("credentials", formData)
    return { message: "✅ Signed In" }
  } catch (error: any) {
    return { error: error.message };
  }
};
