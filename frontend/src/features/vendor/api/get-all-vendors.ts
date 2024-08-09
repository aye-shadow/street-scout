"use server"

import axios from "axios";
import {VendorList} from "../types";
import {BACKEND_API_URL} from "@/features/vendor";
import {handleError} from "src/features/lib";

export async function getAllVendors(page = 0, size = 10): Promise<VendorList> {
  try {
    const { data } = await axios.get<VendorList>(
      `${BACKEND_API_URL}/api/vendors?page=${page}&size=${size}`);
    return data;
  } catch (error: any) {
    return handleError(error);
  }
}
