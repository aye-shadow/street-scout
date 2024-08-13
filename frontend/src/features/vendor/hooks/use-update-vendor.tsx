import {useMutation} from "@tanstack/react-query";
import {updateVendor, useVendorStore, VendorUpdate} from "@/features/vendor";

export function useUpdateVendor()  {

  const vendorStore = useVendorStore();

  return useMutation({
    mutationFn: async () => {
      const vendorDetails: VendorUpdate = {
        ...vendorStore
      }
      return updateVendor(vendorDetails)
    },


    onSuccess: (data) => {
      console.log("⚡️updateVendor", data)
    },

    onError: (error) => {
      console.log("🛑error", error);
    },
  });
};
