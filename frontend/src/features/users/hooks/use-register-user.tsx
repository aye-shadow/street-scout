import {useMutation, useQueryClient} from "@tanstack/react-query";
import {registerUser, UserRegistration} from "@/features/users";
import {toast} from "sonner";
import {useModalStore} from "@/features/modal";

export function useRegisterUser()  {
  const queryClient = useQueryClient();
  const hideModal = useModalStore((state) => state.hide);

  return useMutation({
    mutationFn: (userInfo: UserRegistration) => {
      return registerUser(userInfo);
    },

    onSuccess: (data) => {
      toast.success(`User Registered`);
      queryClient.invalidateQueries({ queryKey: ["vendors"] });
      // redirect("/signin")
    },

    onMutate: () => {
      hideModal();

    },

    onError: (error) => {
      toast.error("🙄Error Registering");
      console.error("error", error);
    },
  });
};
