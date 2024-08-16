"use server"

import axios from "@/features/lib/axios";
import {Location, VendorList} from "@/features/vendor";
import {handleError} from "@/features/lib";

export async function fetchNearbyVendors(loc: Location, range: number) {
  const params: URLSearchParams = new URLSearchParams();
  params.append("lat", String(loc?.latitude))
  params.append("lng", String(loc?.longitude))
  params.append("range", String(range))
  const url = `/api/search/nearby?${params.toString()}`

  console.log("fetchNearbyVendors", url)
  try {
    const { data } = await axios.get<VendorList>(url);
    console.log("fetchNearbyVendors", data);
    return data;
  } catch (error: any) {
    return handleError(error);
  }
};
