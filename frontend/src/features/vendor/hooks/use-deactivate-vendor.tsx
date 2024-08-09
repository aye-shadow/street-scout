import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deactivateVendor} from "@/features/vendor";

export function useDeactivateVendor(vendorId: number)  {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      return deactivateVendor(vendorId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vendors",  vendorId] });
    },

    onError: (error) => {
      console.log("error", error);
    },
  });
};
