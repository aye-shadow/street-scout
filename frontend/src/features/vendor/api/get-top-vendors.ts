"use server"

import {VendorList} from "@/features/vendor";
import axios from "@/features/lib/axios";
import {handleError} from "@/features/lib";

export async function getTopVendors(count: number): Promise<VendorList> {
  try {
    const searchParams = new URLSearchParams();

    searchParams.append("size", String(count))

    const url = `/api/vendors/top?${searchParams.toString()}`;

    const { data } = await axios.get<VendorList>(url);
    return data;
  } catch (error: any) {
    return handleError(error);
  }
};
