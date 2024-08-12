"use server"

import axios from "axios";
import {BACKEND_API_URL, VendorProfile} from "@/features/vendor";
import {handleError} from "src/features/lib";

export async function getVendor(id: number): Promise<VendorProfile> {
  try {
    const { data } = await axios.get<VendorProfile>(
      `${BACKEND_API_URL}/api/vendors/${id}`);
    return data;
  } catch (error: any) {
    return handleError(error);
  }
};
