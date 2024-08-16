import axios from "@/features/lib/axios";
import {Location, VendorList} from "@/features/vendor";

export async function fetchNearbyPlaces(loc: Location, range: number) {
  const params: URLSearchParams = new URLSearchParams();
  params.append("lat", String(loc.latitude))
  params.append("lng", String(loc.longitude))
  const url = `/api/search/nearby?${params.toString()}`

  console.log("fetchNearbyPlaces", url)
  try {
    const { data } = await axios.get<VendorList>(url);
    return url;
  } catch (error: any) {
    return error.message;
  }
};
