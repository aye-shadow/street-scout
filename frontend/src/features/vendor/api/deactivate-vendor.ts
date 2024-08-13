"use server"

import axios from "@/features/lib/api/axios";

export async function deactivateVendor(vendorId: number) {
  try {
    const { status, statusText } = await axios.delete(
      `/api/vendor/${vendorId}`,
    );
    console.log("⚡️deactivated vendor", vendorId, {status, statusText});
    return null;
  } catch (error: any) {
    return error.message;
  }
};
