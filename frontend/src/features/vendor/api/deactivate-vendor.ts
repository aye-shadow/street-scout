import axios from "axios";
import {BACKEND_API_URL} from "@/features/vendor";

export async function deactivateVendor(vendorId: number) {
  try {
    const { status, statusText } = await axios.delete(
      `${BACKEND_API_URL}/api/vendor/${vendorId}`,
    );
    console.log("⚡️deactivated vendor", vendorId, {status, statusText});
    return null;
  } catch (error: any) {
    return error.message;
  }
};
