import {useQuery} from "@tanstack/react-query";
import {getVendor, VendorProfile} from "@/features/vendor";

export function useVendor(id: number): VendorProfile  {
  const { data } = useQuery<VendorProfile>({
    queryKey: ["vendors", id],
    queryFn: () => getVendor(id),
    refetchOnWindowFocus: true,
  });

  return { ...data } as VendorProfile;
};
