import axios from "axios";
import {VendorProfile} from "@/features/vendor";

export async function getVendor(id: number): Promise<VendorProfile> {
  try {
    const { data } = await axios.get<VendorProfile>(`/api/vendors/${id}`);
    return data;
  } catch (error: any) {
    return error.message;
  }
};
