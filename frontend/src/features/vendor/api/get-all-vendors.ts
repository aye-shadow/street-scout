import axios from "axios";
import {VendorList} from "../types";

export async function getAllVendors(page = 0, size = 10): Promise<VendorList> {
  try {
    const { data } = await axios.get<VendorList>(`/api/vendors?page=${page}&size=${size}`);
    return data;
  } catch (error: any) {
    return error.message;
  }
}
