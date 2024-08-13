import { useMutation } from "@tanstack/react-query";

export function useUpdateVendor()  {

  return useMutation({
    mutationFn: async () => {},

    onSuccess: (data) => {},

    onError: (error) => {
      console.log("error", error);
    },
  });
};
