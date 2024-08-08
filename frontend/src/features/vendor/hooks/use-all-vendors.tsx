import {useQuery} from "@tanstack/react-query";
import {getAllVendors} from "@/features/vendor";
import {VendorList} from "../types";

export function useAllVendors()  {
  return useQuery<VendorList>({
    queryKey: ["vendors"],
    queryFn: async () => {
      return getAllVendors()
    },
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 30,
  });
}
