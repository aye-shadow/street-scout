"use server"

import {VendorProfile, VendorUpdate} from "@/features/vendor";
import axios from "@/features/lib/axios";

export async function updateVendor(vendorDetails: VendorUpdate) {
  try {
    const { data } = await axios.put<VendorProfile>(
      `/api/vendors`,
      vendorDetails,
    );
    return data;
  } catch (error: any) {
    return error.message;
  }
};
