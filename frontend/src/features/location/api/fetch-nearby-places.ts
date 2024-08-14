import axios from "@/features/lib/axios";
import {Location} from "@/features/vendor";

export async function fetchNearbyPlaces(loc: Location) {
  const params: URLSearchParams = new URLSearchParams();
  params.append("lat", String(loc.latitude))
  params.append("lng", String(loc.longitude))

  const url = `/api/search?${params.toString()}`
  console.log("fetchNearbyPlaces", url)
  try {
    // const { data } = await axios.get<any>(
    //   ,
    // );
    return url;
  } catch (error: any) {
    return error.message;
  }
};
