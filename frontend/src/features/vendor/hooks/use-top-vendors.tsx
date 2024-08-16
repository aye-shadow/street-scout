import {useQuery} from "@tanstack/react-query";
import {getTopVendors, VendorList} from "@/features/vendor";

export function useTopVendors(count = 3)  {

  const {data} = useQuery<VendorList>({
    queryKey: ["topVendors"],
    queryFn: async () => {
      return await getTopVendors(count);
    },
  });

  return { vendors: data?.vendors || [] }
};
