import {useQuery} from "@tanstack/react-query";
import {fetchNearbyPlaces, useGeolocation} from "@/features/location";

export function useNearbyVendors(range: number)  {
  const { location, getGeoLocation } = useGeolocation();

  const { refetch: fetchNearby, data: nearbyVendors, isPending, } = useQuery({
    queryKey: ["nearbyPlaces"],
    queryFn: async () => {
      return fetchNearbyPlaces(location, range);
    },
    enabled: !!location
  });

  return { location, getGeoLocation, isPending, fetchNearby, nearbyVendors };
};
