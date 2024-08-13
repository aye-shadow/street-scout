"use server"

import {VendorList} from "../types";
import {handleError} from "src/features/lib";
import axios from "@/features/lib/api/axios";

export async function getAllVendors(page = 0, size = 10): Promise<VendorList> {
  try {
    const { data } = await axios.get<VendorList>(
      `/api/vendors?page=${page}&size=${size}`);
    return data;
  } catch (error: any) {
    return handleError(error);
  }
}
