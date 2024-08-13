"use server"

import {VendorProfile} from "@/features/vendor";
import {handleError} from "src/features/lib";
import axios from "@/features/lib/api/axios";

export async function getVendor(id: number): Promise<VendorProfile> {
  try {
    const { data } = await axios.get<VendorProfile>(
      `/api/vendors/${id}`);
    return data;
  } catch (error: any) {
    return handleError(error);
  }
};
