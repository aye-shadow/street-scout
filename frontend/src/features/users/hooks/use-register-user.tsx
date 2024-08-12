import {useMutation, useQueryClient} from "@tanstack/react-query";
import {registerUser, UserRegistration} from "@/features/users";

export function useRegisterUser(hideModal?: () => void)  {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userInfo: UserRegistration) => {
      return registerUser(userInfo);
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["vendors"] });
    },

    onMutate: () => {
      hideModal();
    },

    onError: (error) => {
      console.error("error", error);
    },
  });
};
