"use server"

import {ReviewCreation, ReviewDetails} from "@/features/reviews";
import axios from "@/features/lib/axios";

export async function createReview(vendorId: number, review: ReviewCreation) {
  try {

    const { data, status } = await axios.post<ReviewDetails>(
      `/api/vendors/${vendorId}/reviews`,
      review
    );

    return data;
  } catch (error: any) {
    return error.message;
  }
};
