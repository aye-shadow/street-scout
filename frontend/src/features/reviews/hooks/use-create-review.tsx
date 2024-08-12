import { useMutation } from "@tanstack/react-query";
import {createReview, ReviewCreation} from "@/features/reviews";

export function useCreateReview(hideModal?: () => void)  {

  return useMutation({
    mutationFn: ({ vendorId, review }: { vendorId: number, review: ReviewCreation }) => {
      return createReview(vendorId, review);
    },

    onSuccess: (data) => {

    },

    onMutate: (data) => {
      hideModal();
    },

    onError: (error) => {
      console.log("error", error);
    },
  });
};
