import {useQuery} from "@tanstack/react-query";
import {getVendor, VendorProfile} from "@/features/vendor";

export function useVendor(id: number)  {
  return useQuery<VendorProfile>({
    queryKey: ["vendors", id],
    queryFn: () => getVendor(id),
    refetchOnWindowFocus: true,
  });
};
