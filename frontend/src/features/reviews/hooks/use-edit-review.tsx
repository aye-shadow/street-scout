import {useMutation, useQueryClient} from "@tanstack/react-query";
import {editReview, ReviewEdit} from "@/features/reviews";

export function useEditReview(vendorId: number, reviewId: number, hideModal: () => void)  {
  return useMutation({
    mutationFn: (payload: ReviewEdit) => {
      return editReview(vendorId, reviewId, payload);
    },

    onSuccess: (data) => {
    },

    onMutate: () => {
      hideModal();
    },

    onError: (error) => {
      console.log("error", error);
    },
  });
};
