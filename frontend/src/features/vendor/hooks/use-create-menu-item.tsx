import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addMenuItem, MenuItemRequest, MenuItemList} from "@/features/vendor";

export function useCreateMenuItem()  {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({vendorId, payload }: {vendorId: number, payload: MenuItemRequest}): Promise<MenuItemList> => {
      return addMenuItem(vendorId, payload);
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["vendors"] });
    },

    onError: (error) => {
      console.log("error", error);
    },
  });
};
