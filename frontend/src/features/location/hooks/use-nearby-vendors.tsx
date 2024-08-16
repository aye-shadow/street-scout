import {useQuery} from "@tanstack/react-query";
import {fetchNearbyVendors, useLocationStore} from "@/features/location";
import {VendorList} from "@/features/vendor";

export function useNearbyVendors()  {
  const { location, range } = useLocationStore();
  const { refetch: fetchNearby, data, isPending, } = useQuery<VendorList>({
    queryKey: ["nearbyVendors"],
    queryFn: async () => {
      return fetchNearbyVendors(location, range);
    },
    enabled: !!location
  });

  return { isPending, fetchNearby, nearbyVendors: data?.vendors || [] };
};
