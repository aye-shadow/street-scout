import { useMutation } from "@tanstack/react-query";
import { signInUser } from "@/features/users";
import { toast } from "sonner";

export function useSignIn() {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      return await signInUser(formData);
    },

    onSuccess: (data) => {
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(data.message);
      }
      console.log("✅signed in", data);
    },

    onError: (error) => {
      console.log("error", error);
    },
  });
}
