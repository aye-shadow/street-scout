import {useQuery} from "@tanstack/react-query";
import {getAllVendors, VendorProfile} from "@/features/vendor";
import {VendorList} from "../types";

export function useAllVendors({ page = 0, rowsPerPage = 5 })  {

  return useQuery<VendorList>({
    queryKey: ["vendors"],
    queryFn: async () => {
      return getAllVendors(page, rowsPerPage);
    },
    refetchOnWindowFocus: true,
  });
}
