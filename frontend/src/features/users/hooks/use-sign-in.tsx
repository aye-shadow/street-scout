import {useMutation} from "@tanstack/react-query";
import {signInUser} from "@/features/users";

export function useSignIn()  {

  return useMutation({
    mutationFn: async (formData: FormData) => {
      return await signInUser(formData)
    },

    onSuccess: (data) => {
      console.log("✅signed in", data)
    },

    onError: (error) => {
      console.log("error", error);
    },
  });
};
